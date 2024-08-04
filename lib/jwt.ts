import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY || 'secret';

interface JwtPayload {
    id: number;
    username: string;
}

export function signToken(payload: JwtPayload): string {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h'});
}

export function verifyToken(token: string): JwtPayload | null {
    try {
        return jwt.verify(token, SECRET_KEY) as JwtPayload;
    } catch (error) {
        return null;
    }
}