const usersSchema = require('../models/usuarios')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class AuthController {
    constructor(){

    }
    renderLogin(req,res){
        res.render('login')
    }
    renderRegister(req,res){
        res.render('register')
    }
    async register(req,res){
        try {
        console.log(req.file)
        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(req.body.password, salt)
        const userExist = await usersSchema.findOne({email: req.body.email}) 
        if(userExist) throw new Error('El usuario se encuentra registrado')
        

        const user = await  usersSchema.create({
            name: req.body.name,
            age: req.body.age,
            address: req.body.address,
            email: req.body.email,
            phone: req.body.prefix + "-" + req.body.phone,
            image: req.body.image,
            username: req.body.username,
            password: password
       })
       
        res.json({user})
        
      } catch (error) {
         res.send(error.message)
      }
      
     
    }

    async login(req,res){
        const user = await usersSchema.findOne({email: req.body.email})
        if(user){
            const equalsPassword = await bcrypt.compare(req.body.password, user.password)
            console.log(equalsPassword)
            console.log(req.body.password)

            if(equalsPassword) {
                const datos = {
                    name : user.name,
                    age : user.age,
                    address: user.address,
                }
                const token = jwt.sign(datos, 'clave_secreta')
                res.json({
                    datos,
                    token
                })
            } else {
                res.send('Reescriba sus datos ')
            }
                
        }else {
            res.send('Los campos no coinciden')
        }
    }
}

module.exports = new AuthController()