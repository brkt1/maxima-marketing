const chatbotOpenButton = document.querySelector(".chatbot-open-button");
const chatbot = document.querySelector(".chatbot");

chatbotOpenButton.addEventListener("click", () => {
  chatbot.style.display = "block";
});

const chatbotInput = document.querySelector('.chatbot-input');
const chatbotSendButton = document.querySelector('.chatbot-send-button');
const chatbotMessages = document.querySelector('.chatbot-messages');

chatbotSendButton.addEventListener('click', () => {
  const userMessage = chatbotInput.value;
  chatbotMessages.innerHTML += `<li class="user-message">${userMessage}</li>`;

  // If the user message is "hello", respond with "hi".
  if (userMessage === "hello") {
    addBotMessage("Hi!");
  }

  // If the user message is "how are you?", respond with "I am good, thanks for asking".
  if (userMessage === "how are you?") {
    addBotMessage("I am good, thanks for asking!");
  }

  // If the user message is "what is the time?", respond with the current time.
  if (userMessage === "what is the time?") {
    const currentTime = new Date();
    addBotMessage(`The current time is ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`);
  }

  // Otherwise, respond with "I don't understand".
  else {
    addBotMessage("I don't understand");
  }

  chatbotInput.value = '';
});

function addBotMessage(botMessage) {
  chatbotMessages.innerHTML += `<li class="bot-message">${botMessage}</li>`;
}
const chatbotOpenButton = document.querySelector(".chatbot-open-button");
const chatbot = document.querySelector(".chatbot");

chatbotOpenButton.addEventListener("click", () => {
  chatbot.style.display = "block";
});
