import type { NextApiRequest, NextApiResponse } from 'next';
import { signToken } from '../../../../lib/jwt';


// Default users
const users = [
    {
        id: 1,
        email: 'joe@example.com',
        password: 'password1',},
];


export default  async function login(req: NextApiRequest, res: NextApiResponse){
    if (req.method !== 'POST'){
        return res.status(405).end(); // Method is not allowed
    }

    const {email, password} = req.body;

    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).json({message: 'Invalid credentials'});
    }

    const token = signToken({ id: user.id, email: user.email});

    res.status(200).json({token})

}


