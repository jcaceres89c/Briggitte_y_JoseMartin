
// Control de reproducción de música
document.addEventListener('DOMContentLoaded', () => {
  const boton = document.getElementById('playMusicBtn');
  const audio = document.getElementById('musica');

  if (boton && audio) {
    boton.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        boton.classList.add('active');
      } else {
        audio.pause();
        boton.classList.remove('active');
      }
    });
  }
});
