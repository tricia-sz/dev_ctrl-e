import {DefautSession} from 'nex-auth'
declare module "next-auth" {
    interface Session {
        user: {
            id: string;
        } & DefautSession["user"];
    }
}