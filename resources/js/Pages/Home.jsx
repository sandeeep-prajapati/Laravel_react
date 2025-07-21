import React from 'react';
import { Link } from '@inertiajs/react';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the Home page!</p>
            <Link href="/products">Go to Products</Link>
        </div>
    );
};

export default Home;