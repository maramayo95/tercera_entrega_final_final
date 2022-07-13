const carritoDAO = require('../daos/'+process.env.AMBIENTE+'/ProductosDAO')

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
}


module.exports = new CarritosServices()