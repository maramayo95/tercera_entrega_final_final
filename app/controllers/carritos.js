require('dotenv').config()
const carritoDAO = require('../daos/'+process.env.AMBIENTE+'/CarritosDAO')
const sendMail = require('../utils/nodemailer')
const sendWhatsapp = require('../utils/twilioWhatsapp')
const sendSMS = require('../utils/twilioSms')
const carritoModel = require('../models/carritos')
const usersSchema = require('../models/usuarios')
const carritoServices = require('../services/carritoServices')

class CarritosController{

    async traerCarritos (req, res) {
        const carritos = carritoServices.traerCarritoServices()
        res.send(carritos)
    }

    async agregarCarrito(req, res){
        const carritoGuardado = await carritoServices.traerCarritoServices
        res.status(201).send(carritoGuardado)
    }

    async agregarProductoACarrito(req, res){
        const carrito = await carritoServices.agregarProductoAlCarritoServices(req.params.id, req.params.idCarrito)
        res.send(carrito)
    }

    async eliminarProductoCarrito(req, res){
        const carrito = await carritoServices.eliminarProductosCarritoServices(req.params.idCarrito, req.params.id)
        res.send(carrito)
    }

    async eliminarCarrito(req, res){
        const eliminarCarrito = await carritoServices.eliminarCarritoServices(req.params.id)
        res.send(eliminarCarrito)
    }

    async finalizarCompra(req,res){
        const usuario =  await usersSchema.findOne({_id: req.params.idUsuario})
        console.log(usuario)
        const detalle = await carritoModel.findOne({_id: req.params.id}).populate("productos")
        

        let tabla = ''
        detalle.productos.forEach(prods => {
            tabla += `<div> Pedidos del usuario: Email :  ${usuario.email} Nombre : ${usuario.name} </div> 
             <div> Nombre : ${prods.name}, Precio: ${prods.price}, Cantidad: ${prods.stock}, </div> `
           
         })
        
         let infoMobile = ''
         
         const infoSmsWhatsapp = () => {
             detalle.productos.forEach(prods => {
             infoMobile += `
             Pedidos del usuario: Email :  ${usuario.email} Nombre : ${usuario.name}  
             Nombre : ${prods.name}, Precio: ${prods.price}, Cantidad: ${prods.stock} `
             
                })

        }  
            
        infoSmsWhatsapp()

         const html = `
        <h1>Lista de compra </h1>
        <h2>Detalle </h2>
        <p>${tabla}</p>
        `
        //sendMail(html)
         sendWhatsapp(infoMobile)
         sendSMS(infoMobile)
        res.send('enviado')
    }

}

module.exports = new CarritosController()