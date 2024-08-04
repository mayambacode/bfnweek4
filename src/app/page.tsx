import Image from "next/image";
import styles from "./styles/login.module.css";
import Link from "next/link";
import login from "./pages/api/login";


export default function Home() {
  return (

    <div>
        <h1>Welcome</h1>
        <Link href="/pages/login">Login</Link>
    </div>
   
   
  );
}
