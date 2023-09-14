const objetosPropio = require('../models/Objetos-propio')

exports.crearObjetoPropio = async (req, res) => {
    try {
        const objetoPropioExiste = await objetosPropio.findOne({ "cedula": req.body.cedula }).exec()
        if (objetoPropioExiste != null) {
            res.status(503).send('Los datos ya existen')
            return
        }

        let objetoPropioM = new objetosPropio(req.body)
        await objetoPropioM.save()
        res.send(objetoPropioM)
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... Ocurrió algo con el proceso')
    }
}

exports.obtenerObjetoPropio = async (req, res) => {
    try {
        const objetosDataPropio = await objetosPropio.find()
        res.json(objetosDataPropio)
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... Ocurrió algo con el proceso')
    }
}
