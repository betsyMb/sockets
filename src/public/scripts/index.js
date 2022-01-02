const form = document.getElementById("form");
const input = document.getElementById("chat-input");

socketConnected();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    sendChat(input.value);
    input.value = "";
  }
});
