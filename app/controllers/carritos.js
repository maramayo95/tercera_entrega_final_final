



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
       
        const mensajeUsuario = await carritoServices.finalizarCompraServices()
        res.send(mensajeUsuario)
    }

}

module.exports = new CarritosController()