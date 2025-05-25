// app/api/auth/[...nextauth]/route.ts
import NextAuth, {Session, SessionStrategy, User} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';
import {JWT} from "next-auth/jwt";
import {string} from "postcss-selector-parser";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                name: {label: "Name", type: "text"},
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: "password"},
            },
            async authorize(credentials) {
                try {
                    const res = await axios.post('http://localhost:8080/user/login', {
                        name: credentials?.name,
                        email: credentials?.email,
                        password: credentials?.password,
                    });

                    const token = res.data.token;

                    const payload = JSON.parse(
                        Buffer.from(token.split('.')[1], 'base64').toString()
                    );

                    return {
                        id: payload.email,
                        email: payload.email,
                        role: payload.role,
                        accessToken: token,
                        name: payload.name,
                    };
                } catch (error) {
                    if (axios.isAxiosError(error)) {
                        if (error.response?.status === 401) {
                            console.error('Unauthorized: ایمیل یا رمز عبور اشتباه است.');
                            throw new Error('Unauthorized');
                        } else if (error.response?.status === 500) {
                            console.error('Server error: خطایی در سمت سرور رخ داده.');
                            throw new Error('Internal server error');
                        }
                    }
                    console.error('Unexpected error during login:', error);
                    throw new Error('Login failed');
                }
            }
        })
    ],
    session: {
        strategy: 'jwt' as SessionStrategy,
    },
    pages: {
        error: '/auth/error'
    },
    callbacks: {
        async jwt({token, user}: { token: JWT, user: User }) {
            if (user) {
                token.accessToken = user.accessToken;
                token.role = user.role;
                token.name = user.name;
                token.accessTokenExpires = Date.now() + 60 * 60 * 1000;
                console.log(Date.now());
            }
            if (!token.accessTokenExpires || Date.now() < token.accessTokenExpires) {
                return token;
            }

            console.log('Access token expired');
            token.accessTextExpires="TokenExpired";
            return token;
        },
        async session({session, token}: { session: Session, token: JWT }) {
            console.log(token.accessTokenExpires,"********************");
            console.log(Date.now());

            session.accessToken = token.accessToken as string;
            session.name = token.name as string;
            session.accessTextExpires = token.accessTextExpires as string;
            return session;
        }
    },
    secret: "ee9440eaf2579ea6090d508c653a87d117adf744cd0844cdb3eb622b9cc19f8d92d7d66011fba2d04d551beb2585e70315d156864bb9622e85907f37f0bc2d81",
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
