const {Favorite} = require('../DB_connection')

async function postFav(req, res) {
    try {
        const { id, name, origin, status, image, species, gender } = req.body
        console.log(req.body)
        if (!id || !name || !origin || !status || !image || !species || !gender) return res.status(401).send("Faltan datos xd")
        const newFav = await Favorite.create({id, name, origin, status, image, species, gender})
        if(newFav){
            const favs = await Favorite.findAll()
            res.status(200).json(favs)
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = postFav