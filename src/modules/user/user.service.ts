import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserService = async (payload: Partial<IUser>) => {
     const { name, email } = payload;
    const user = await User.create({
         name,
         email
    })
    return user;
}

export const userServices = async () =>{
    const users = await User.find({});

    const totalUsers = await User.countDocuments()

    return {
        data: users,
        meta: {
            total: totalUsers
        }
    };
}