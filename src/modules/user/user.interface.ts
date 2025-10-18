import { Types } from "mongoose";

export enum Role {
    SUPER_ADMIN = "SUPER_ADMIN",
    ADMIN = "ADMIN",
    USER = "USER",
    DRIVER = "DRIVER",
}

export interface IAuthProvider {
    provider: string,
    providerId: string
}

export enum IsAtive {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    BLOCKED = "BLOCKED",
}

export interface IUser {
    name: string;
    email: string;
    password?: string;
    phone?: string;
    picture?: string;
    address?: string;
    isDeleted?: string;
    isActive?: IsAtive;
    isVerified?: string;
    role: Role;
    bookings?: Types.ObjectId[];
    drivers?: Types.ObjectId[];

    auths: IAuthProvider[]

}