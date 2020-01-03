import React from 'https://dev.jspm.io/react';
import pogo from 'https://deno.land/x/pogo/main.js';
import * as flags from "https://deno.land/std@v0.27.0/flags/mod.ts";


const defaultPort = 3000;
const argPort = flags.parse(Deno.args).port;
const port = argPort ? Number(argPort) : defaultPort;
const server = pogo.server({ port,hostname : '0.0.0.0' });

const App = () => {
    return <div data-reactroot=""><p>Hello, World from Stas with JSX!</p></div>;
};
server.router.get('/', () => {
    return (
        <html>
            <head><title>Home of wow</title></head>
            <body><div id="root"><App /></div></body>
        </html>
    );
});

await server.start();