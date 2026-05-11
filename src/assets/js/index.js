// Entry point — redirect bare index to home
if (window.location.pathname.endsWith('index.js') === false) {
    // loaded as a script; redirect to home if on a bare index path
    const path = window.location.pathname;
    if (path === '/' || path.endsWith('/index.html') || path.endsWith('/src/')) {
        window.location.replace('pages/home.html');
    }
}
