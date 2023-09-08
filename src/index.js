const {
    ApolloServer
} = require('apollo-server');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const fs = require('fs');

const typeDefs = require('./graphql/typeDefs')

const MONGODB = "mongodb+srv://Timothy:Timonaire@cluster0.05lnusy.mongodb.net/?retryWrites=true&w=majority";

const server = new ApolloServer({
    typeDefs
});



// Endpoint to fetch the latest type definitions
app.get('/latest-type-definitions', (req, res) => {
    // Read the typeDefs file from your local directory
    const latestTypeDefs = fs.readFileSync('./graphql/typeDefs.js', 'utf8');
    res.send(latestTypeDefs);
});

// Start the server
const port = 5000;
app.listen(port, () => {
    console.log(`Service 2 is running on port ${port}`);
});


mongoose.connect(MONGODB, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log(`MongoDb connected`)
        return server.listen
    })