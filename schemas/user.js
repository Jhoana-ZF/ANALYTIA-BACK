import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type User {
        id: Int!
        nombre: String!
        email: String!
        edad: Int!
    }

    type Query {
        users: [User!]!
        user(id: Int!): User
    }

    type Mutation {
        createUser(nombre: String!, email: String!, edad: Int!): User
        updateUser(id: Int!, nombre: String, email: String, edad: Int): User
        deleteUser(id: Int!): User
    }
`;
