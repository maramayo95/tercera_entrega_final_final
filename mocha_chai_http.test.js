let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;


chai.use(chaiHttp);

let id = ''

const url = "http://localhost:8080"

describe("Comprobando que funcionen correctamente los endpoints de productos", () => {
    before(() => {
        console.log('\n ****** Comienzo TOTAL del Test******')
    })
    after(() => {
        console.log("\n ****** Fin TOTAL del Test******'")
    })
    beforeEach(() => {
        console.log("\n ****** Comienzo Test ******")
    })
    afterEach(() => {
        console.log('***** FIN TEST ********')
    })

    // POST PRODUCTO   
    it('Debe insertar un producto', (done) => {
        chai.request(url)
            .post('/api/productos/')
            .send({
                name: "Pantalones Babucha 5",
                description: "String",
                code: 12312123,
                image: "String",
                price: 100,
                stock: 100
            })
            .end(function (err, res) {
                console.log(res.body)
                console.log(res.status)
                id = res.body._id
                expect(res).to.have.status(200);
            });
            chai.request(url)
            .get('/api/productos')
            .end( function(err,res){
                console.log(res.body)
                expect(res).to.have.status(200); 
                done();
            });
            
    });

    //GET ALL

    it('Debe traer todos los productos', (done) => {
        chai.request(url)
            .get('/api/productos')
            .end(function (err, res) {
                console.log(res.status)
                expect(res).to.have.status(200);
                done();
            });
    });


    // GET BY ID 

    it('Debe traer un producto de la base de datos', (done) => {
        chai.request(url)
            .get(`/api/productos/${id}`)
            .end(function (err, res) {
                //console.log(res.body)
                console.log(res.status)
                expect(res).to.have.status(200);
                done();
            });
    });

    // Testeando con el producto creado
    
    it('Debe traer el producto creado recientemente', (done) => {
        chai.request(url)
            .get(`/api/productos/${id}`)
            .end(function (err, res) {
                console.log(res.body)
                console.log(res.status)
                expect(res).to.have.status(200);
                done();
            });
    });

    // Modificanco el producto creado

    it('El test debe modificar el producto', (done) => {
        chai.request(url)
        .put(`/api/productos/${id}`)
        .send({
            name: "Pantalones Babucha 40",
            description: "String",
            code: 12312123,
            image: "String",
            price: 100,
            stock: 100
        })
        .end( function(err,res){
        console.log(res.body.name)
        expect(res).to.have.status(200);
        done();
        });
    });

    // Eliminando el producto creado

    it('Debe eliminar el producto con el id seleccionado', (done) => {
        chai.request(url)
        .del(`/api/productos/${id}`)
        .end( function(err,res){
        expect(res).to.have.status(200);
        chai.request(url)
        .get('/api/productos')
        .end( function(err,res){
        console.log(res.body)
        expect(res).to.have.status(200);
        done();
        });
        });
        });




})