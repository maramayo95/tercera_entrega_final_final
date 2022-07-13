require('dotenv').config()
const productosServices = require('../services/productosServices')


class ProductosController{

    async guardarProducto(req, res) {
        const productoAgregado = await productosServices.guardarProductosServices(req.body)
        res.send(productoAgregado)
    }

    async mostrarProductos(req, res){
        const productos = await productosServices.mostrarProductosServices()
        res.send(productos)
    }
    
    async mostrarProducto(req, res){
        const producto = await productosServices.mostrarProductoService(req.params.id)
        res.send(producto)
    }
    
    async actualizarProducto(req, res){
        const producto = await productosServices.actualizarProductoService(req.body, req.params.id)
        res.send(producto)
    }

    async eliminarProducto(req, res){
        const producto = await productosServices.eliminarProductosService(req.params.id)
        res.send(producto)
    }
}

module.exports = new ProductosController()