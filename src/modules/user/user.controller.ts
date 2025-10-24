import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { createUserService, userServices } from "./user.service";
import { catchAsync } from "../../app/utils/catchAsync";
import { sendResponse } from "../../app/utils/sendResponse";

// const createUser = async (req: Request, res: Response, next: NextFunction) => {

//     try {
//         const user = await createUserService(req.body)
//         res.status(httpStatus.CREATED).json({
//             message: "User created successfully",
//             user
//         })
//     } catch (error) {
//         console.log(error);
//         next(error)
//     }
// }

const createUser = catchAsync(async (req: Request, res: Response) => {
    const user = await createUserService(req.body);
    sendResponse(res,{
        statusCode: httpStatus.CREATED,
        message: "User created successfully",
        data: user,
        success: true
    })
})



const getAllUsers = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const users = await userServices();

    sendResponse(res,{
        statusCode: httpStatus.CREATED,
        message: "User created successfully",
        data: users.data,
        success: true,
        meta: users.meta
    })

    return users;

})

export const UserControllers = {
    createUser,
    getAllUsers
}