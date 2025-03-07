import { User } from "@prisma/client";
import NextAuth from "next-auth/next";
import { JWT } from "next-auth/jwt";

declare module "next-auth"{
    interface Session{
        user:User
    }
}

declare module "next-auth/jwt"{
    type JWT= User;
}