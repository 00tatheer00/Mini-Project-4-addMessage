const messageInput = document.getElementById('message-input');


messageInput.addEventListener('keydown', function (event) {
    if (event.key = "")
        getMessage();
})



function getMessage() {
    document.getElementById('message-output')
        .innerHTML = messageInput.value;

    messageInput.value = "";
}