const { Router } = require('express')
const usuarioController = require('../controllers/usuarioController')

const router = Router()

router.get('/usuarios', usuarioController.pegaTodosOsUsuarios)
router.get('/usuarios/:id', usuarioController.pegaUmUsuario)

module.exports = router