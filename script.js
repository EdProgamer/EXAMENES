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
      `Tu puntaje es: ${resultado.Puntaje}`;
  } else {
    document.getElementById('resultado').innerText = 
      'DNI no encontrado';
  }
});
