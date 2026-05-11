const messages = [
    "See? Nothing happened. Told you.",
    "Still nothing. You can stop now.",
    "...okay, that's a bit much.",
    "Are you really still clicking?",
    "Something is watching you.",
    "It noticed you.",
    "Stop. Please.",
    "You shouldn't have done that...",
    "...",
    "It's too late.",
];

let clickCount = 0;

const btn = document.getElementById('dare-btn');
const clickMsg = document.getElementById('click-msg');

btn.addEventListener('click', () => {
    if (clickCount < messages.length) {
        clickMsg.textContent = messages[clickCount];
    }
    clickCount++;

    if (clickCount >= 5) {
        btn.style.animation = 'shake 0.3s';
        setTimeout(() => { btn.style.animation = ''; }, 300);
    }

    if (clickCount >= 8) {
        document.body.style.background = '#0d0000';
    }
});

// After 30 seconds, reveal the GIF
setTimeout(() => {
    document.getElementById('video-container').style.display = 'block';
    clickMsg.textContent = '';
    btn.style.display = 'none';
}, 30000);

// Show final text 6 seconds after the GIF appears
setTimeout(() => {
    document.getElementById('final-text').style.display = 'block';
}, 36000);