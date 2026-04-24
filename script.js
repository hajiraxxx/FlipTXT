function sendMessage() {
    let input = document.getElementById("message-input");
    let text = input.value;

    if (text === "") return;

    let chatBox = document.getElementById("chat-box");

    let msg = document.createElement("div");
    msg.classList.add("message", "sent");
    msg.innerText = text;

    chatBox.appendChild(msg);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}
