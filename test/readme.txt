// Methods to test the app

// Get All Products
// Test.getProducts()

// To test this method you need to aplicate an id Product to parameter of this function
// Test.getProduct('62cb59a6329f2b79cd9d5bbf')

//To add any product in db you have to pass any object with this properties like paramether
// Test.postProduct({
//     name: "Remeras T",
//     description: "String",
//     code: 12312123,
//     image: "String",
//     price: 100,
//     stock: 100
// })
// If you want to test if the product has been updated you can use Test.getProducts()
// Test.getProducts()

// Test.putProduct("62ddac9659c73d19c5677204", {
//         name: "Camiseta de Boca",
//         description: "String",
//         code: 12312123,
//         image: "String",
//         price: 100,
//         stock: 100
//     } )
// Test.getProduct("62ddac9659c73d19c5677204")
// Test.getProducts()


If you want to delete any product 

Test.deleteProduct("62ddac9659c73d19c5677204")