const express = require('express')
const app = express()
const cors = require("cors")

app.use(cors())

app.listen(8080, () => {
    console.log('Serveur à l écoute')
  })
