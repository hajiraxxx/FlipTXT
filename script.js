function sendMessage() {
    let input = document.getElementById("message-input");
    let text = input.value;

    if (text === "") return;

    let msg = document.createElement("div");
    msg.classList.add("message", "sent");
    msg.innerText = text;

    document.getElementById("chat-box").appendChild(msg);

    input.value = "";
}
