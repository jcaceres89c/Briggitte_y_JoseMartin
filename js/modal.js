/*Nombre Que se cargara en el formulario */
const nombreCodificado = encodeURIComponent(invitado.Nombre);
const formURL = `https://docs.google.com/forms/d/e/1FAIpQLSdNM8J9WxjLZHbiyffD-gQ1fuIAnA7ah4iffXjbokj7T7J2aQ/viewform?usp=pp_url&entry.1079611635=${nombreCodificado}`;
window.location.href = formURL;
