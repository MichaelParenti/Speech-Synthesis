const playbtn = document.getElementById("start");
const pause = document.getElementById("stop");
const textInput = document.getElementById("text");
const speed = document.getElementById("speed");

playbtn.onclick = function() {
    play(textInput.value)
}

function play(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.addEventListener('end', function() {
        textInput.disabled = false;
    });
    textInput.disabled = true;
    speechSynthesis.speak(utterance);
}