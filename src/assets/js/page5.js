/* page5.js */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Page 5 Loaded - Enhanced");

    // --- CONFIGURATION ---
    // 75 seconds to reach the 120s total mark
    // TESTING: Change to 5000 for 5 seconds
    const TIME_UNTIL_PAGE_6 = 75000; 

    // --- PARTICLE SYSTEM FOR PAINT ---
    function createSplatter() {
        const container = document.createElement('div');
        container.classList.add('splatter-container');
        document.querySelector('.room').appendChild(container);

        const particleCount = 40;
        
        for (let i = 0; i < particleCount; i++) {
            const droplet = document.createElement('div');
            droplet.classList.add('droplet');
            
            // Random size
            const size = Math.random() * 15 + 5;
            droplet.style.width = `${size}px`;
            droplet.style.height = `${size}px`;
            
            // Random Direction (CSS Variables)
            const tx = (Math.random() - 0.5) * 600 + 'px';
            const ty = (Math.random() - 0.5) * 600 + 'px';
            droplet.style.setProperty('--tx', tx);
            droplet.style.setProperty('--ty', ty);
            
            // Random Delay for natural feel
            droplet.style.animation = `splashOut 0.8s cubic-bezier(0, .9, .57, 1) forwards`;
            droplet.style.animationDelay = `${Math.random() * 0.2}s`;
            
            container.appendChild(droplet);
        }

        // Cleanup
        setTimeout(() => container.remove(), 1000);
    }

    // Trigger Splatter when bucket hits wall (approx 1.4s)
    setTimeout(() => {
        createSplatter();
        // Add a screen shake effect
        document.body.style.animation = "glitchText 0.2s infinite";
        setTimeout(() => document.body.style.animation = "", 500);
    }, 1400);

    // --- REDIRECT ---
    setTimeout(() => {
        window.location.href = 'page6.html';
    }, TIME_UNTIL_PAGE_6);
});