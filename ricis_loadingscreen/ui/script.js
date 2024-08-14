document.addEventListener('mousemove', (event) => {
    const background = document.querySelector('.background-image');
    const { clientX, clientY, innerWidth, innerHeight } = event;
    const moveX = (clientX - innerWidth / 2) * 0.02;
    const moveY = (clientY - innerHeight / 2) * 0.02;

    background.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

const audioElement = document.getElementById('backgroundMusic');
const volumeSlider = document.getElementById('volumeSlider');
const progressBar = document.querySelector('.progress');
const stopMusicText = document.querySelector('.stop-music');
let isPlaying = true;

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        if (isPlaying) {
            audioElement.pause();
            stopMusicText.innerHTML = 'START MUSIC WITH <span class="space-bar"></span>';
        } else {
            audioElement.play();
            stopMusicText.innerHTML = 'STOP MUSIC WITH <span class="space-bar"></span>';
        }
        isPlaying = !isPlaying;
    }
});

volumeSlider.addEventListener('input', (event) => {
    audioElement.volume = event.target.value / 100;
});

audioElement.addEventListener('timeupdate', () => {
    const progressPercent = (audioElement.currentTime / audioElement.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
});