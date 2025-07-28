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

//fotos aleatorias
 
document.addEventListener('DOMContentLoaded', () => {

  const imagenes = [
    './fotos/fotos1.jpeg',
    './fotos/fotos2.jpeg',
    './fotos/fotos3.jpeg',
    './fotos/fotos4.jpeg',
    './fotos/fotos5.jpeg',
    './fotos/fotos6.jpeg',
    './fotos/fotos7.jpeg',
    './fotos/fotos8.jpeg',
    './fotos/fotos9.jpeg',
    './fotos/fotos10.jpeg',
    './fotos/fotos11.jpeg',
    // Agrega más si quieres
  ];

  const animaciones = ['flotar1', 'flotar2', 'flotar3'];

  function crearImagenAleatoria() {
    const img = document.createElement('img');
    img.src = imagenes[Math.floor(Math.random() * imagenes.length)];
    img.className = 'foto-aleatoria';

    const size = Math.floor(Math.random() * 100) + 50; // entre 50px y 150px
    img.style.width = `${size}px`;
    const padding = 100; // margen para no salirte
img.style.left = `${Math.random() * (window.innerWidth - padding)}px`;
img.style.top = `${Math.random() * (window.innerHeight - padding)}px`;
    const anim = animaciones[Math.floor(Math.random() * animaciones.length)];
    const duracion = Math.random() * 10 + 5; // entre 5s y 15s

    img.style.animation = `${anim} ${duracion}s linear forwards`;

    document.body.appendChild(img);

    // Eliminar después de la animación
    setTimeout(() => {
      img.remove();
    }, duracion * 3000);
  }

  // Llama una imagen cada segundo
  setInterval(crearImagenAleatoria, 2000);
});


