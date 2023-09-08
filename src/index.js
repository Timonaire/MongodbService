const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/typeDefs')

const MONGODB = "mongodb+srv://Timothy:Timonaire@cluster0.05lnusy.mongodb.net/?retryWrites=true&w=majority";

const server = new ApolloServer({
    typeDefs
});


mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log(`MongoDb connected`)
        return server.listen
    }

    )
server
.listen()
.then (({url}) => 
console.log(`server is running on ${url}`)
);