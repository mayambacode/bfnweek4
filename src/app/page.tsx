import Image from "next/image";
import styles from "./styles/login.module.css";

export default function Home() {
  return (
    <section className={styles.section}>
      <form action="">
        <input type="email" placeholder="Email" /> <br />
        <input type="password" placeholder="Password" /> <br />
        <button type="submit">Login</button> <br />
        <button type="submit">Logout</button> <br />
      </form>
    </section>
  );
}
