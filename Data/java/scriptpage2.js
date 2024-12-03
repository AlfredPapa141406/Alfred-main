// JavaScript to control play and pause functionality
const music = document.getElementById('backgroundMusic');
const musicButton = document.getElementById('musicButton');

musicButton.addEventListener('click', () => {
    if (music.paused) {
        music.play(); // Play music
        musicButton.textContent = 'Pause Music'; // Update button text
    } else {
        music.pause(); // Pause music
        musicButton.textContent = 'Play Music'; // Update button text
    }
});
