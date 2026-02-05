const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola desde CI/CD con Ansible');
});

app.listen(3000, () => {
  console.log('App escuchando en puerto 3000');
});
