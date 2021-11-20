function start_blink() {
    var blink_speed = 2000;
    var t = setInterval(function () {
    var messages = document.querySelectorAll(".myBlinkingDiv");
    for (var i = 0; i < messages.length; i++) {
        messages[i].style.visibility = (messages[i].style.visibility == 'hidden' ? '' : 'hidden');
    }
}, blink_speed);
}