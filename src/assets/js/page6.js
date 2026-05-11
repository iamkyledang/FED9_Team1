/* page6.js */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Page 6 Loaded - Final Warning");

    // --- CONFIGURATION ---
    // Jumpscare lasts for 10 seconds
    // TESTING: Change to 3000 for 3 seconds
    const JUMPSCARE_DURATION = 10000; 

    const jumpscareLayer = document.getElementById('jumpscare-layer');
    const minecraftScreen = document.getElementById('minecraft-screen');

    // --- TRANSITION TO DEATH SCREEN ---
    setTimeout(() => {
        // 1. Hide Jumpscare smoothly
        if (jumpscareLayer) {
            jumpscareLayer.style.transition = "opacity 0.5s";
            jumpscareLayer.style.opacity = "0";
            
            setTimeout(() => {
                jumpscareLayer.style.display = 'none';
                
                // 2. Show Minecraft Death Screen
                if (minecraftScreen) {
                    minecraftScreen.style.display = 'flex';
                    // Trigger reflow for transition
                    void minecraftScreen.offsetWidth; 
                    minecraftScreen.classList.add('visible');
                }
            }, 500);
        }
        console.log("Jumpscare Ended. Showing Death Screen.");
    }, JUMPSCARE_DURATION);
});

// --- BUTTON FUNCTIONS ---

function retryGame() {
    console.log("Respawning...");
    // Add a fade out effect before reloading
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = "0";
    setTimeout(() => {
        location.reload();
    }, 1000);
}

function exitGame() {
    console.log("Exiting to Title...");
    // Visual feedback
    const btn = event.target;
    btn.innerHTML = "Goodbye.";
    setTimeout(() => {
        window.close();
        window.location.href = "https://www.google.com";
    }, 1000);
}