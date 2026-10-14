
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Puntos de la Actividad Realizada</h1>
    <ul>
      <li>Paso 1: Configuración del entorno Node.js y Express.</li>
      <li>Paso 2: Creación del servidor local en el puerto 3000.</li>
      <li>Paso 3: Sincronización de repositorios con GitHub.</li>
    </ul>
  `);
});

const server = app.listen(port, () => {
  console.log('Servidor iniciado correctamente.');
  console.log('Escuchando:', server.listening);
});

server.on('close', () => {
  console.log('ALERTA: el servidor se ha cerrado.');
});

server.on('error', (error) => {
  console.log('Error del servidor:', error.message);
});