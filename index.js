const mongoose = require('mongoose');
const app = require('./app/app')
require('dotenv').config()



// const Test = require('./test/axiosTest')

// Middelware para poder ejecutar graph ql 

// app.use(
//     "/graphql",
//     graphqlHTTP({
//       graphiql: true,
//       schema,
//     })
//   );



const PORT = process.env.PORT || 8080
const urlBase = process.env.DB

if (process.env.AMBIENTE == 'mongo') mongoose.connect(urlBase)

console.log(PORT, 'Este es el puerto')

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
