const messageInput = document.getElementById("message-input");

messageInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    getMessage();
  }
});

messageInput.addEventListener("focus", function (event) {
  event.target.style.background = "lightgrey";
});

messageInput.addEventListener("blur", function (event) {
  event.target.style.background = "";
});

function getMessage() {
  document.getElementById("message-output").innerHTML = messageInput.value;
  messageInput.value = "";
}
