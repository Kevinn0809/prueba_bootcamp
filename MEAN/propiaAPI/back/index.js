const express = require('express')
const conectarDB = require('./config/db')

const app = express()
conectarDB()

app.use(express.json())

//ruta principal
app.use('/api/v1/', require('./routes/routes'))


app.listen(3000, () => {
    console.log("La aplicacion se esta ejecutando en http://localhost:3000")
})
