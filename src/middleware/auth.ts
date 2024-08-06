import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '../../lib/jwt';

export default function authMiddleware(handler: (req: NextApiRequest, res: NextApiResponse) => void) {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        // Extract token from authorization header
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Authorization token is missing' });
        }

        // Verify token and extract user information
        const user = verifyToken(token);

        if (!user) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        // Attach user information to request object
        (req as any).user = user;

        // Proceed with the handler function
        return handler(req, res);
    };
}
