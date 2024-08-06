"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/login.module.css"; // Adjust the import path if necessary
import { signIn } from "next-auth/react"; // Import NextAuth's signIn function
import Image from "next/image";
import googleImage from "../../images/google.png";
import gitImage from "../../images/github.png";

const LoginPage = () => {
    const [email, setEmail] = useState('');
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
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const { token } = await response.json();
            document.cookie = `token=${token}; path=/`;
            router.push('/protected'); // Redirect to a protected page after successful login
        } else {
            setError('Invalid credentials, something went wrong'); // Display an error message
        }
    };

    return (
        <section className={styles.section}>
            
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.title}>Login Page</h1>
                <input
                    className={styles.input}
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                <p>OR</p>

                <button type="button" onClick={() => signIn('google')}>
                    <Image src={googleImage} alt="google" width={100} height={100}></Image>
                </button>
                <button type="button" onClick={() => signIn('github')}>
                    <Image src={gitImage} alt="github" width={100} height={100}></Image>
                </button>
                
            </form>
            {error && <p className={styles.error}>{error}</p>}
        </section>
    );
};

export default LoginPage;
