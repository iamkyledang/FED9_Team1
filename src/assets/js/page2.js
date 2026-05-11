const whispers = [
    "You shouldn't stay here.",
    "It knows you opened this.",
    "Leave before it notices.",
    "You were not invited.",
    "It was waiting for someone.",
    "Why did you come?"
];

const whisperElement = document.getElementById("whisper");
const mainText = document.getElementById("mainText");

function randomWhisper() {
    const i = Math.floor(Math.random() * whispers.length);
    if (whisperElement) whisperElement.textContent = whispers[i];
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function init() {
    randomWhisper();
    setInterval(randomWhisper, 5000);

    // Auto-advance to page3 after 10 seconds
    setTimeout(() => {
        window.location.href = "page3.html";
    }, 10000);
}
