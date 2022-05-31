// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {User} from "../../types/user";
import {users1} from '../../mockData/users';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<User | undefined>
) {
    const user = users1.find(i => i.id === req.query.id);

    res.status(200).json(user);
}
