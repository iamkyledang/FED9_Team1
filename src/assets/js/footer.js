(function loadFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (!placeholder) return;

    fetch('../components/footer.html')
        .then(res => res.text())
        .then(html => {
            placeholder.innerHTML = html;

            // Rotate whisper messages inside footer
            const whispers = [
                "You are still here...",
                "It watches the bottom of the page.",
                "Don't scroll down.",
                "Something counted your clicks.",
                "Leave. Now."
            ];
            const el = placeholder.querySelector('#footer-whisper');
            if (el) {
                setInterval(() => {
                    el.textContent = whispers[Math.floor(Math.random() * whispers.length)];
                }, 6000);
            }
        })
        .catch(() => { /* footer unavailable, silent fail */ });
})();
