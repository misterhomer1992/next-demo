import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.clearPreviewData();
    res.end('Preview mode disabled')
}
