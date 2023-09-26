import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userResolver = {
    Query: {
        users: async () => {
            return await prisma.user.findMany();
        },
        user: async (_, { id }) => {
            return await prisma.user.findUnique({ where: { id } });
        },
    },
    Mutation: {
        createUser: async (_, { nombre, email, edad }) => {
            return await prisma.user.create({ data: { nombre, email, edad } });
        },
        updateUser: async (_, { id, nombre, email, edad }) => {
            return await prisma.user.update({
                where: { id },
                data: { nombre, email, edad },
            });
        },
        deleteUser: async (_, { id }) => {
            return await prisma.user.delete({ where: { id } });
        },
    },
};
