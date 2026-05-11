(function loadHeader() {
    const placeholder = document.getElementById('header-placeholder');
    if (!placeholder) return;

    fetch('../components/header.html')
        .then(res => res.text())
        .then(html => {
            placeholder.innerHTML = html;
            // Highlight current page link
            const current = window.location.pathname.split('/').pop();
            placeholder.querySelectorAll('.header-nav a').forEach(a => {
                if (a.getAttribute('href').endsWith(current)) {
                    a.style.color = '#cc0000';
                    a.style.borderBottom = '1px solid #660000';
                }
            });
        })
        .catch(() => { /* header unavailable, silent fail */ });
})();
