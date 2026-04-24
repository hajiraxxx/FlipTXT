let username = "";

const friends = ["💅 Mia", "💖 Lola", "🎀 Ava"];

function enterChat() {
    username = document.getElementById("username").value;
    if (!username.trim()) return;

    document.getElementById("user-display").innerText = username;

    document.getElementById("login").style.display = "none";

    let phone = document.getElementById("phone");
    phone.classList.add("open");
}

/* MESSAGE SEND */
function sendMessage() {
    let input = document.getElementById("message-input");
    let text = input.value;

    if (!text.trim()) return;

    addMessage(username, text, "sent");

    input.value = "";

    document.getElementById("ping").play();

    setTimeout(fakeReply, 1000 + Math.random() * 1500);
}

/* ADD MESSAGE */
function addMessage(name, text, type) {
    let msg = document.createElement("div");
    msg.classList.add("message", type);
    msg.innerHTML = `<b>${name}:</b> ${text}`;

    document.getElementById("chat-box").appendChild(msg);

    document.getElementById("chat-box").scrollTop =
        document.getElementById("chat-box").scrollHeight;
}

/* FAKE GROUP CHAT REPLIES */
function fakeReply() {
    const replies = [
        "omg stoppp 😭",
        "this is sooo y2k coded 💖",
        "WAIT I LOVE THAT",
        "no wayyyy 💅",
        "spillll 👀",
        "HELP 💀"
    ];

    let friend = friends[Math.floor(Math.random() * friends.length)];
    let reply = replies[Math.floor(Math.random() * replies.length)];

    addMessage(friend, reply, "bot");
}

/* GLITTER CURSOR */
document.addEventListener("mousemove", function(e) {
    let spark = document.createElement("div");
    spark.className = "spark";

    spark.style.left = e.pageX + "px";
    spark.style.top = e.pageY + "px";

    document.body.appendChild(spark);

    setTimeout(() => spark.remove(), 600);
});
