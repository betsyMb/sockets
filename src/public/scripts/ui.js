const itemMessage = document.getElementById("messages");

const renderMessage = (msg) => {
  itemMessage.innerHTML += `<div>${msg}</div>`;
};

const listMessages = (messages) => {
  itemMessage.innerHTML = "";
  messages.map((msg) => renderMessage(msg));
};
