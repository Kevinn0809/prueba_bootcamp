const mongoose2 = require('mongoose')

const ejemploPropioSchema = mongoose2.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        require: true
    },
    fecha_nacimiento: {
        type: Date,
        require: true
    },
    cedula: {
        type: Number,
        require: true
    },
    creacion: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose2.model('Objeto-propio', ejemploPropioSchema)
