import '../styles/tailwind.output.css';
import '../styles/tailwind.css'
import React from 'react';

export default function MyApp ({Component, pageProps}) {
    return (
        <Component {...pageProps}/>
    )
}