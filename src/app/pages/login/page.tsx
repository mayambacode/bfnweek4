"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/login.module.css"; // Adjust the import path if necessary

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const { token } = await response.json();
            document.cookie = `token=${token}`;
            router.push('/protected');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <section className={styles.section}>
            
            <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.title}> Login in Page</h1>
                <input
                    className={styles.input}
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Email"
                /> <br />
                <input
                    className={styles.input}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                /> <br />
                <button className={styles.button} type="submit">Login</button> <br />
                <button className={`${styles.button} ${styles.logoutButton}`} type="button">Logout</button> <br />
            </form>
            {error && <p className={styles.error}>{error}</p>}
        </section>
    );
};

export default LoginPage;
