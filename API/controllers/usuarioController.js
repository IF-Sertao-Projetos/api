const database = require('../models/index.js')

class usuarioController {
    static async pegaTodosOsUsuarios(req, res) {
        try {
            const todosOsUsuarios = await database.usuarios.findAll()
            return res.status(200).json(todosOsUsuarios)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = usuarioController