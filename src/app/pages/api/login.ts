import type { NextApiRequest, NextApiResponse } from 'next';
import { signToken } from '../../../../lib/jwt';



const users = [
    {
        id: 1,
        username: 'user',
        password: 'password1',},
];


export default  async function login(req: NextApiRequest, res: NextApiResponse){
    if (req.method !== 'POST'){
        return res.status(405).end(); // Method is not allowed
    }

    const {username, password} = req.body;

    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).json({message: 'Invalid credentials'});
    }

    const token = signToken({ id: user.id, username: user.username});

    res.status(200).json({token})

}























    
