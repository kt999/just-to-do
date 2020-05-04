import React from 'react';
import Link from 'next/link';

const Home = () => {
    return (
        <>
            <div>lending page</div>
            <Link href="/login"><a>go to login</a></Link>
            <br/>
            <Link href="/main"><a>go to main</a></Link>
        </>
    )
};

export default  Home;