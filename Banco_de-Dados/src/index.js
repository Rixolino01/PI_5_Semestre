const express = require('express')
const app = express() //instanciando o express
require('dotenv').config()  // pegando as variaveis

const protocol = process.env.PROTOCOL || "http"
const ip = require('ip').address()
const port = process.env.PORT || 3030

const routes = require('./routes')
app.use(routes)

//aqui não está trazendo os endereços que as variaveis estão lendo
app.listen(port, () => console.log(`Server started in http://localhost:${port} or ${protocol}://${ip}:${port}`));
