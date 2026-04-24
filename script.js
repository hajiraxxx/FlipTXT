function openMessages() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("messages").classList.remove("hidden");
}

function goHome() {
    document.getElementById("messages").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
}
