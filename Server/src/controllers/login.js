const users = require('../utils/users')
function login(req, res){
    const {email, password} = req.query
    const index = users.findIndex((user)=>{
        return user.email == email
    })
    if(users[index].email == email&&users[index].password == password){
        res.status(200).json({access: true})
    }else{
        res.status(200).json({access: false})
    }

}

module.exports = login