import { PrismaClient } from "@prisma/client"
 const prisma = new PrismaClient();

const GetUsers = async () =>{
    return await prisma.user.findMany()
}

const GetUserById = async (id:string) => {
    return await prisma.user.findUnique({
        where: {
            id: id
        }
    })
}

const CreatUser = async (name: string, email: string, password: string) => {
    return await prisma.user.create({
        data:{
            name: name,
            email: email
        }
    })
}

const DeleteUser = async(id: string) => {
    return await prisma.user.delete({
        where: {
            id: id
        }
    })
}

const UpdateUserName = async (id: string, name: string) => {
    return await prisma.user.update ({
        where:{
            id: id
        },
        data: {
            name: name
        }

    })
}

const UpdateUserPassword = async (id: string, password: string) => {
    return await prisma.user.update ({
        where: {
            id: id
        },
        data: {
            password: password
        }
    })
}

export default {
    GetUsers,
    GetUserById,
    CreatUser,
    DeleteUser,
    UpdateUserName,
    UpdateUserPassword
}