const axios = require('axios')

const URL = "https://rickandmortyapi.com/api/character/"

async function getCharById(req, res){
    const {id} = req.params

    try {
        const character = await axios.get(URL+id)
        const {data} = character
        if(data){
            const {id, name, gender, species, origin, image, status} = data
            res.status(200).json({id, name, gender, species, origin, image, status})
        }
    } catch (error) {
        res.status(500).send(error.message)
    }


    // axios.get(URL+id)
    // .then((character)=>{
    //     const {data} = character
    //     if(data){
    //         const {id, name, gender, species, origin, image, status} = data
    //         res.status(200).json({id, name, gender, species, origin, image, status})
    //     }
    // })
    // .catch((err)=>{
    //     res.status(500).send(err.message)
    // })


}

module.exports = getCharById