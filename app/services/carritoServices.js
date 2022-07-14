require('dotenv').config()
const carritoDAO = require('../daos/'+process.env.AMBIENTE+'/ProductosDAO')
const carritoModel = require('../models/carritos')
const usersSchema = require('../models/usuarios')
const sendMail = require('../utils/nodemailer')
const sendWhatsapp = require('../utils/twilioWhatsapp')
const sendSMS = require('../utils/twilioSms')


class CarritosServices {
    constructor(){

    }

    async traerCarritoServices(){
        const carritos = await carritoDAO.traerCarritos()
        return carritos
    }

    async agregarCarritoService(){
        const carritoGuardado = await carritoDAO.agregarCarrito()
        return carritoGuardado
    }

    async agregarProductoAlCarritoServices(id, idCarrito){
        const carrito = await carritoDAO.agregarProductoACarrito(id, idCarrito)
        return carrito

    } 

    async eliminarProductosCarritoServices(idCarrito, id ){
        const carrito = await carritoDAO.eliminarProductoCarrito(idCarrito, id)
        return carrito
    }

    async eliminarCarritoServices(id){
        const eliminarCarrito = await carritoDAO.eliminarCarrito(id)
        return eliminarCarrito
    }

    async finalizarCompraServices(){
        const usuario =  await usersSchema.findOne({_id: req.params.idUsuario})
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

         console.log(usuario)
    }
}


module.exports = new CarritosServices()