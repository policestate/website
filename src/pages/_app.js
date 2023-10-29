// pages/_app.js
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

    return (
        <div>
                <Navigation />
                <Component {...pageProps} />
        </div>
    );
}

export default MyApp;

