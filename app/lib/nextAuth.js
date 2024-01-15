import { MongoDBAdapter } from "@auth/mongodb-adapter";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import clientPromise from "./mongoDbClient";
import { userModel } from "@/model/users";
import dbConnect from "@/config/db";
import { adminModel } from "@/model/admin";
import { expertModel } from "@/model/experts";
dbConnect()

export const authOptions = {
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Username" },
                password: { label: "Password", type: "password", placeholder: "Password" }
                },
            async authorize(credentials) {
                if (credentials.isAdmin) {
                    const user = await adminModel.findOne({email: credentials.email, password: credentials.password})
                    if (!user) {
                        return null
                    }
                    return user
                } else if (credentials.isExpert) {
                    const user = await expertModel.findOne({email: credentials.email, password: credentials.password})
                    if (!user) {
                        return null
                    }
                    return user
                } else {
                    const user = await userModel.findOne({email: credentials.email, password: credentials.password})
                    if (!user) {
                        return null
                    }
                    return user
                }
            },
        })
    ],
    callbacks: {
        async jwt ({ token, user, session }) {
            if (user) {
                return { 
                    ...token,
                    id: user._id,
                    role: user.role,
                }
            }
            return token
        },
        async session ({ session, token, user }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    role: token.role,
                }
            }
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXT_AUTH_SECRET,
    cookies: {
        sessionToken: {
            name: `Login Token`,
            options: {
              httpOnly: true,
              sameSite: 'lax',
              path: '/',
              secure: true
            }
          },
    }
}