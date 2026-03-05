  const audio = document.getElementById('audioPlayer');
  const playBtn = document.getElementById('playPauseBtn');
  const playIcon = playBtn.querySelector('img'); 

  playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playIcon.src = 'img/going.png';   
    } else {
        audio.pause();
        playIcon.src = 'img/pauses.png';  
    }
  });

  audio.addEventListener('ended', () => {
    playIcon.src = 'img/going.png';
  });

