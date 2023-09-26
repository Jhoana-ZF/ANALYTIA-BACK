import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { PrismaClient } from "@prisma/client";
import { typeDefs } from "./schemas/user.js";
import { userResolver } from "./resolvers/userResolvers.js";

const prisma = new PrismaClient();

const app = express();

const server = new ApolloServer({ typeDefs, resolvers: userResolver });

async function startServer() {
    await server.start();
    server.applyMiddleware({ app });

    const PORT = globalThis.process.env.PORT || 4000;

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}/graphql`);
    });
}

startServer();
