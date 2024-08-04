import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div>
        <h1>Welcome</h1>
        <Link href="/pages/login">Login</Link>
    </div>
  );
}
