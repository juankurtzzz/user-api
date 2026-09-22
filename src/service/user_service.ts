import { PrismaClient } from "@prisma/client/extension"
const prisma = new PrismaClient();

const GetUser = async (name: String, email: String) => {
    await prisma.user.create({
        data:{
            name: name,
            email: email
        }
    })
}

export default {GetUser}