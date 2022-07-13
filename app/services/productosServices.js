const productoDAO = require('../daos/'+process.env.AMBIENTE+'/ProductosDAO')

class ProductosServices { 
    constructor(){

    }
    async guardarProductosServices(body){
        const productoAgregado = await productoDAO.guardarProducto(body)
        return productoAgregado
    }
    async mostrarProductosServices() {
        const productos = await productoDAO.listarProductos()
        return productos
    }
    async mostrarProductoService(id){
        const producto = await productoDAO.mostrarProducto(id)
        return producto
    }
    async actualizarProductoService(body, id){
        const producto = await productoDAO.actualizarProducto(body, id)
        return producto
    }
    async eliminarProductosService(id){
        const producto = await productoDAO.eliminarProducto(id)
        return producto 
    }
}


module.exports = new ProductosServices()