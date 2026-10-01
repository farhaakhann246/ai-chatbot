const chatForm =  document.getElementById("chatForm");

const messageInput = document.getElementById("messageInput");

const sendButton =  document.getElementById("sendButton");

const clearButton =  document.getElementById("clearButton");

const chatMessages =  document.getElementById("chatMessages");


let conversation = [];


function addMessage(role, content) {

  const messageElement =
    document.createElement("div");

  messageElement.className =
    `message ${role}-message`;


  const label =
    document.createElement("div");

  label.className =
    "message-label";

  label.textContent =
    role === "user" ? "You" : "AI";


  const contentElement =
    document.createElement("div");

  contentElement.className =
    "message-content";

  contentElement.textContent =
    content;


  messageElement.appendChild(label);

  messageElement.appendChild(
    contentElement
  );


  chatMessages.appendChild(
    messageElement
  );


  chatMessages.scrollTop =
    chatMessages.scrollHeight;


  return contentElement;
}


chatForm.addEventListener(
  "submit",
  async (event) => {

    event.preventDefault();


    const query =
      messageInput.value.trim();


    if (!query) {
      return;
    }


    addMessage(
      "user",
      query
    );


    messageInput.value = "";

    sendButton.disabled = true;


    try {

      const response =
        await fetch("/api/chat", {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            query,
            conversation
          })

        });


      const data =
        await response.json();


      if (!response.ok) {
        throw new Error(
          data.error?.message ||
          "Something went wrong."
        );
      }


      addMessage(
        "assistant",
        data.answer
      );


      conversation.push(
        {
          role: "user",
          content: query
        },
        {
          role: "assistant",
          content: data.answer
        }
      );


    } catch (error) {

      addMessage(
        "assistant",
        `Error: ${error.message}`
      );

    } finally {

      sendButton.disabled = false;

      messageInput.focus();

    }

  }
);


clearButton.addEventListener(
  "click",
  () => {

    conversation = [];

    chatMessages.innerHTML = "";

    addMessage(
      "assistant",
      "Hello! How can I help you today?"
    );

  }
);