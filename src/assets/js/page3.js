setTimeout(() => {
    const meme = document.getElementById('meme');
    const sound = document.getElementById('creepy-sound');
    const text = document.getElementById('creepy-text');

    meme.style.display = 'block'; 
    sound.play(); 
    text.style.display = 'none'; 
}, 20000); 