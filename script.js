let username = "";

function enterChat() {
    let input = document.getElementById("username").value;

    if (input === "") return;

    username = input;

    document.getElementById("user-display").innerText = username;
    document.getElementById("login").classList.add("hidden");
    document.getElementById("chat-screen").classList.remove("hidden");
}

function sendMessage() {
    let input = document.getElementById("message-input");
    let text = input.value;

    if (text === "") return;

    let chatBox = document.getElementById("chat-box");

    // YOUR message
    let msg = document.createElement("div");
    msg.classList.add("message", "sent");
    msg.innerText = text;
    chatBox.appendChild(msg);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;

    // fake reply (for now)
    setTimeout(() => {
        let reply = document.createElement("div");
        reply.classList.add("message", "received");
        reply.innerText = "…interesting 👀";
        chatBox.appendChild(reply);

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}
