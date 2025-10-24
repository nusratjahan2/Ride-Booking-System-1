import { IUser } from "./user.interface";
export declare const createUserService: (payload: Partial<IUser>) => Promise<import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const userServices: () => Promise<{
    data: (import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[];
    meta: {
        total: number;
    };
}>;
//# sourceMappingURL=user.service.d.ts.map