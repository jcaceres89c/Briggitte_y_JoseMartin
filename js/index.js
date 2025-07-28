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
  const contenedor = document.createElement('div');
  contenedor.id = 'fotos-aleatorias';
  document.body.prepend(contenedor);

  const imagenes = [
    './fotos/fotos1.jpeg',
    './fotos/fotos2.jpeg',
    './fotos/fotos3.jpeg',
    './fotos/fotos4.jpeg',
    './fotos/fotos5.jpeg',
    './fotos/fotos6.jpeg',
    './fotos/fotos7.jpeg',
    './fotos/fotos8.jpeg',
    // Agrega más si quieres
  ];

  function mostrarImagenAleatoria() {
    const img = document.createElement('img');
    img.src = imagenes[Math.floor(Math.random() * imagenes.length)];
    img.className = 'foto-flotante';

    // Posiciones aleatorias dentro del viewport
    img.style.left = `${Math.random() * 90}%`;
    img.style.top = `${Math.random() * 90}%`;

    contenedor.appendChild(img);

    // Remover la imagen después de 10s
    setTimeout(() => {
      img.remove();
    }, 30000);
  }

  // Mostrar una imagen inmediatamente
  mostrarImagenAleatoria();

  // Y seguir mostrando cada 4 segundos
  setInterval(mostrarImagenAleatoria, 4000);
});


