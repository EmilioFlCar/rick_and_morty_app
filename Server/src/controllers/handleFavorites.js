
let myFavorites = []

function postFav(req, res){
    const newChar = {...req.body}
    myFavorites.push(newChar)
    res.status(200).json(myFavorites)
}

function deleteFav(req, res){
    const {id} = req.params
     const newFavs = myFavorites.filter((character)=> character.id !== parseInt(id))
     myFavorites = newFavs

    res.status(200).json(myFavorites)
}

module.exports = {
    postFav, 
    deleteFav
}