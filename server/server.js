const express                   = require('express');
const { ApolloServer }          = require('apollo-server-express');

const { typeDefs, resolvers }   = require('./schemas') 
const db                        = require('./config/connection')



const app                       = express();
const PORT                      = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = new ApolloServer({
    typeDefs,
    resolvers
});




const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    // integrate our Apollo server with the Express application as middleware
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            // log where we can go to test our GQL API
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
};


startApolloServer(typeDefs, resolvers);