const axios = require('axios').default

class Test {
    constructor(){

    }
    async getProducts(){ 
        try{
            const url = "http://localhost:8080/api/productos/"
            const response = await axios.get(url)
            console.log(response.data)
        } catch(error){
            console.error(error)
    
        }
    
    }

    async getProduct(id){ 
        try{
            const url = `http://localhost:8080/api/productos/${id}`
            const response = await axios.get(url)
            console.log(response.status, response.data)
        } catch(error){
            console.error(error)
        }
    
    }

    async postProduct(dataObj){
        try {
            const  url = "http://localhost:8080/api/productos/"
            axios.post(url, dataObj)
            console.log("Producto cargado correctamente")
        } catch (error) {
            console.log(error)
        }
    }

    async putProduct(id, dataObj){
        try {
            const url = `http://localhost:8080/api/productos/${id}`
            axios.put(url, dataObj)
            console.log("Producto actualizado correctamente")
            
        } catch (error) {
            console.log(error)
        }
    }
    async deleteProduct(id){
        try {
            const url = `http://localhost:8080/api/productos/${id}`
            axios.delete(url)
            console.log("Producto eliminado correctamente")
            
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = new Test()