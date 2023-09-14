const Objeto = require('../models/Objetos')

exports.crearObjetos = async (req, res) => {
    // console.log(req.body)
    try {
        const objetoExistente = await Objeto.findOne({ "nombre": req.body.nombre }).exec()
        console.log("file: api.controllers.js:7  objetoExistente:", objetoExistente)
        if (objetoExistente != null) {
            res.status(503).send('El dato ya existe')
            return
        }

        let objetoModel
        objetoModel = new Objeto(req.body)
        await objetoModel.save()
        res.send(objetoModel)
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... Ocurrió algo con el proceso')
    }

}

exports.obtenerTodoObjetos = async (req, res) => {
    try {
        const objetosData = await Objeto.find()
        res.json(objetosData)
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... Ocurrió algo con el proceso')
    }

}

exports.obtenerUnSoloObjeto = async (req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const objetoData = await Objeto.findById(req.params.id)
            console.log('file: api.controllers.js:38 -> objetoData:', objetoData)

            if (objetoData == null) {
                res.status(404).send('Objeto no encontrado')
            } else {
                res.json(objetoData)
            }
        } else {
            res.status(418).send('El id proporcionado no existe o no es correcto')
        }
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... Ocurrió algo con el proceso')
    }
}

exports.actualizarObjetos = async (req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const objetoData = await Objeto.findById(req.params.id)
            if (!objetoData) {
                res.status(404).send('El id proporcionado no se encuentra')
            } else {
                const { nombre, edad, urlImagen } = req.body

                objetoData.nombre = nombre
                objetoData.edad = edad
                objetoData.urlImagen = urlImagen


                let objetoActualizado = await Objeto.findOneAndUpdate({ _id: req.params.id }, objetoData)
                res.json(objetoActualizado)
            }
        } else {
            res.status(418).send('El id proporcionado no existe o no es correcto')
        }
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups.. Ocurrió algo con el proceso')
    }
}

exports.eliminarObjetos = async (req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const objetoData = await Objeto.findById(req.params.id)
            if (!objetoData) {
                res.status(404).send('El id proporcionado no se encuentra')
                return
            }
            await Objeto.findOneAndRemove({ _id: req.params.id })
            res.send('Objeto eliminado')
        } else {
            res.status(418).send('El id proporcionado no existe o no es correcto')
        }
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... Ocurrió algo con el proceso')
    }
}

