import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '../../lib/jwt';

export default function authMiddleware(handler: (req: NextApiRequest, res: NextApiResponse) => void) {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const token = req.headers.authorization?.split(' ') [1];

        if (!token) {
            return res.status(401).json({ message: 'Authorized token is missing' });
        }

        const user = verifyToken(token);

        if(!user) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        (req as any).user = user;

        return handler(req, res);
    };
}