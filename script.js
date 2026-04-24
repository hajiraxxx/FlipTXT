function enterChat() {
    let name = document.getElementById("username").value;
    if (!name.trim()) return;

    document.getElementById("user-display").innerText = name;

    document.getElementById("login").classList.add("hidden");
    document.getElementById("chat-screen").classList.remove("hidden");
}

function sendMessage() {
    let input = document.getElementById("message-input");
    let text = input.value;

    if (!text.trim()) return;

    let msg = document.createElement("div");
    msg.classList.add("message", "sent");
    msg.innerText = text;

    document.getElementById("chat-box").appendChild(msg);

    input.value = "";

    document.getElementById("chat-box").scrollTop =
        document.getElementById("chat-box").scrollHeight;
}
