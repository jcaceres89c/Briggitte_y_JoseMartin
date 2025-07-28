document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bgMusic');
  const playBtn = document.getElementById('playMusicBtn');

  // Función que se llama en primer interacción para iniciar el audio
  function iniciarAudio() {
    audio.play().catch(err => {
      console.log("Autoplay bloqueado, usa el botón para reproducir:", err);
    });

    // Solo necesitamos esta interacción una vez
    document.removeEventListener('click', iniciarAudio);
    document.removeEventListener('touchstart', iniciarAudio);
  }

  // Escucha primera interacción en pantalla
  document.addEventListener('click', iniciarAudio);
  document.addEventListener('touchstart', iniciarAudio);

  // Reproducir desde botón (por si el usuario lo necesita)
  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
});
