// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {Users} from "../../types/user";
import {users1} from "../../mockData/users";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Users>
) {
    return new Promise((resolve) => {
        setTimeout(() => {
            res.status(200).json(users1);
        }, 4000);
    });
}
