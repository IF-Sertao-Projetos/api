const database = require('../models/index.js')

class usuarioController {
    static async pegaTodosOsUsuarios(req, res) {
        try {
            const todosOsUsuarios = await database.Usuarios.findAll()
            return res.status(200).json(todosOsUsuarios)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmUsuario(req, res) {
        const { id } = req.params
        try {
            const umUsuario = await database.Usuarios.findOne({
                where: {
                    id: Number(id) 
                }})
            return res.status(200).json(umUsuario)    
        }
        catch(error) {
            return res.status(500).json(error.message)
        }
    }
}


module.exports = usuarioController