const mongoose = require('mongoose')

const objetosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    urlImagen: {
        type: String,
        required: true
    },
    creacion: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Objeto', objetosSchema)
