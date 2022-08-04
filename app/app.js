const express = require('express')
const app = express()
const ejs = require('ejs')
const { graphqlHTTP } = require('express-graphql') 
const {schemaGraphQL} = require('./src/api/models/graphql')
const graphQLRoot = require('./src/api/controllers/controllerGraphQL')

const routesProductos = require('./routers/productos')
const routesCarritos = require('./routers/carritos')
const routesAuth = require('./routers/auth.router')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views/partials')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/productos', routesProductos)
app.use('/api/carritos', routesCarritos)
app.use('/auth', routesAuth )

app.use('/graphql', graphqlHTTP({
    schema: schemaGraphQL,
    rootValue: graphQLRoot,
    graphiql: true,
 }));





module.exports = app