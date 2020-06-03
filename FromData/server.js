const express = require('express')
const app = express()
const path = require('path')
//middleware para interpretar archivos y decirle donde subirlos
const multer = require('multer')
//lo obtenido es guardado en la direccion de destino
const upload = multer({ dest: 'image/' })

//respuesta a la peticion en especifico
app.get('/', function (req, res) { 
  res.sendFile(path.resolve('index.html'))
})

//le mandamos el dat
app.post('/', upload.single('image'), function (req, res) { 
  console.log(req.file)
  console.log(req.body.username)
  res.status(200)
})

app.listen(3000, function () {
  console.log('ap en el puerto 3000')
})