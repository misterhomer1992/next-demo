// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {Users} from "../../types/user";
import {users1} from '../../mockData/users';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Users>
) {
    res.status(200).json(users1);
}
