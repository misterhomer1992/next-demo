import {NextApiRequest, NextApiResponse} from "next";
import {fetchUser} from "../../appAPI/firebaseAdmin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.query.secret !== 'MY_SECRET_TOKEN' || !req.query.id) {
        return res.status(401).json({message: 'Invalid token'})
    }

    // @ts-ignore
    const user = await fetchUser(req.query.id);

    if (!user) {
        return res.status(401).json({message: 'Invalid user id'})
    }

    res.setPreviewData({})
    res.redirect(`/users/${user.id}`)
}
