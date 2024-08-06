import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProtectedPage: React.FC = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = document.cookie.split('; ').find(row => row.startsWith('token='));
        if (token) {
            setIsAuthenticated(true);
        } else {
            router.push('/login');
        }
        setIsLoading(false);
    }, [router]);

    if (isLoading) return <p>Loading...</p>;

    if (!isAuthenticated) return null;

    return <h1>This is a protected page</h1>;
};

export default ProtectedPage;
