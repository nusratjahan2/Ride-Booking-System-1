import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserService = async (payload: Partial<IUser>) => {
    
    const user = await User.create(payload)
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