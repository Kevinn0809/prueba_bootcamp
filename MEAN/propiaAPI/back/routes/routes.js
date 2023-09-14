const express = require('express')
const router = express.Router()
const objetosController = require('../controllers/api.controllers')
const objetoPropioContro = require('../controllers/api.controllers.propio')

//objetosController.(obtenerObjetos) se encuentra en la carpeta ../controllers/api.controllers.js
router.get('/obtener-personajes', objetosController.obtenerTodoObjetos)
router.get('/buscar-personaje/:id', objetosController.obtenerUnSoloObjeto)
router.post('/crear-objeto', objetosController.crearObjetos)
router.put('/', objetosController.actualizarObjetos)
router.delete('/eliminar-objeto/:id ', () => { console.log("pepe") })

router.get('/obtener-objeto-propio', objetoPropioContro.obtenerObjetoPropio)
router.post('/crear-objeto-propio', objetoPropioContro.crearObjetoPropio)

module.exports = router
