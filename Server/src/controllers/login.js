const { User } = require('../DB_connection')
async function login(req, res) {
    try {
        const { email, password } = req.query
        if (!email || !password) {
            return res.status(400).send("Faltan datos")
        }
        const user = await User.findOne({
            where: { email },
        })
        if (!user) {
            res.status(404).send("Usuario no encontrado")
        }

        if (user.password === password) {
            res.status(200).json({access: true})
        } else {
            res.status(403).send("Contraseña incorrecta")
        }
    } catch (error) {
        res.status(500).json(error.message)
    }

}


module.exports = login