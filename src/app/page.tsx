import Image from "next/image";
import styles from "./styles/login.module.css";

export default function Home() {
  return (
    <section className={styles.section}>
      <form className={styles.form} action="">
        <input className={styles.input} type="email" placeholder="Email" /> <br />
        <input className={styles.input} type="password" placeholder="Password" /> <br />
        <button className={styles.button} type="submit">Login</button> <br />
        <button className={`${styles.button} ${styles.logoutButton}`} type="submit">Logout</button> <br />
      </form>
    </section>
  );
}
