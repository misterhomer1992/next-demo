// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {Users} from "../../types/user";
import {adminDatabase} from "../../firebase/adminDB";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Users | null>
) {
    const data = await adminDatabase
        .database()
        .ref('users')
        .get();

    const value = data.val() as Users | null;

    res.status(200).json(value);
}
