let datos = [];

fetch('datos.json')
  .then(response => response.json())
  .then(data => datos = data);

document.getElementById('formDNI').addEventListener('submit', function(e) {
  e.preventDefault();
  const dniIngresado = document.getElementById('dni').value.trim();
  const resultado = datos.find(item => item.DNI === dniIngresado);

  if (resultado) {
    document.getElementById('resultado').innerText = 
      `Tu puntaje obtenido es: ${resultado.Puntaje}`;
  } else {
    document.getElementById('resultado').innerText = 
      'DNI no válido';
  }

  if (resultado) {
  const div = document.getElementById('resultado');
  div.innerText = `Tu puntaje obtenido es: ${resultado.Puntaje}`;
  div.style.backgroundColor = "#d4edda"; // verde suave
  div.style.borderColor = "#28a745";     // verde intenso
} else {
  const div = document.getElementById('resultado');
  div.innerText = "DNI no válido";
  div.style.backgroundColor = "#f8d7da"; // rojo suave
  div.style.borderColor = "#dc3545";     // rojo intenso
}

  });
