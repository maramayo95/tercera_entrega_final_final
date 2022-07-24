const axios = require('axios').default

class Test {
    constructor(){

    }
    async getProducts(){ 
        try{
            const url = "http://localhost:8080/api/productos/"
            const response = await axios.get(url)
            console.log(response.data, response.status)
        } catch(error){
            console.error(error.status)
    
        }
    
    }

    async getProduct(id){ 
        try{
            const url = `http://localhost:8080/api/productos/${id}`
            const response = await axios.get(url)
            console.log(response.status, response.data)
        } catch(error){
            console.error(error.status)
        }
    
    }

    async postProduct(dataObj){
        try {
            const  url = "http://localhost:8080/api/productos/"
            const res = await axios.post(url, dataObj)
            console.log(res.status)
            console.log("Producto cargado correctamente")
        } catch (error) {
            console.log(error.status)
        }
    }

    async putProduct(id, dataObj){
        try {
            const url = `http://localhost:8080/api/productos/${id}`
            const res = await axios.put(url, dataObj)
            console.log(res.status)
            console.log("Producto actualizado correctamente")
            
        } catch (error) {
            console.log(error.status)
        }
    }
    async deleteProduct(id){
        try {
            const url = `http://localhost:8080/api/productos/${id}`
            const res = await axios.delete(url)
            console.log(res.status)
            console.log("Producto eliminado correctamente")
            
        } catch (error) {
            console.log(error.status)
        }
    }

}

module.exports = new Test()