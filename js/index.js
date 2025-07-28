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
 
/*
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
    './fotos/fotos12.jpeg',
    './fotos/fotos13.jpeg',
    './fotos/fotos14.jpeg',
    './fotos/fotos15.jpeg',
    './fotos/fotos16.jpeg',
    './fotos/fotos17.jpeg',
    './fotos/fotos18.jpeg',
    './fotos/fotos19.jpeg',
    './fotos/fotos20.jpeg',
    './fotos/fotos21.jpeg',
    './fotos/fotos22.jpeg',
    './fotos/fotos23.jpeg',
    './fotos/fotos24.jpeg',
    './fotos/fotos25.jpeg',
    './fotos/fotos26.jpeg',
    './fotos/fotos27.jpeg',
    './fotos/fotos28.jpeg',
    './fotos/fotos29.jpeg',
    './fotos/fotos30.jpeg',
    // Agrega más si quieres
  ];*/

  const container = document.getElementById("fotos-aleatorias");
  const images = 
  [
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
    './fotos/fotos12.jpeg',
    './fotos/fotos13.jpeg',
    './fotos/fotos14.jpeg',
    './fotos/fotos15.jpeg',
    './fotos/fotos16.jpeg',
    './fotos/fotos17.jpeg',
    './fotos/fotos18.jpeg',
    './fotos/fotos19.jpeg',
    './fotos/fotos20.jpeg',
    './fotos/fotos21.jpeg',
    './fotos/fotos22.jpeg',
    './fotos/fotos23.jpeg',
    './fotos/fotos24.jpeg',
    './fotos/fotos25.jpeg',
    './fotos/fotos26.jpeg',
    './fotos/fotos27.jpeg',
    './fotos/fotos28.jpeg',
    './fotos/fotos29.jpeg',
    './fotos/fotos30.jpeg',
  ];

  function createFloatingImage() {
    const img = document.createElement("img");
    img.src = images[Math.floor(Math.random() * images.length)];
    img.classList.add("floating-image");

    const size = 20 + Math.random() * 40; // tamaño aleatorio
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;

    const left = Math.random() * 100;
    img.style.left = `${left}vw`;

    const duration = 4 + Math.random() * 4;
    img.style.animationDuration = `${duration}s`;

    container.appendChild(img);

    // Eliminar imagen después de la animación
    setTimeout(() => {
      img.remove();
    }, duration * 1000);
  }

  // Generar varias imágenes al entrar a la página
  window.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 20; i++) {
      setTimeout(createFloatingImage, i * 300); // pequeñas demoras para que no aparezcan todas a la vez
    }

    // Y seguir generando cada cierto tiempo
    setInterval(() => {
      createFloatingImage();
    }, 1500);
  });


 


