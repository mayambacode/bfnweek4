import { GetServerSideProps } from "next";
import { verifyToken } from "../../../../lib/jwt";
import React from "react";
import exp from "constants";








// interface ProtectedPageProps {
//     username: string;
// }

// const ProtectedPage: React.FC<ProtectedPageProps> = ({username}) => {
//     return  <div>Welcome, {username}!</div>
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const {req} = context;
//     const token = req.cookies.token ?? '';

//     const payload = verifyToken(token);

//     if (!payload) {
//         return {
//             redirect: {
//                 destination: '/login',
//                 permanent: false,
//             },
//         };
//     }

//     return{
//         props:{
//             username: payload.email,
//         },
//     }

// };

// export default ProtectedPage;