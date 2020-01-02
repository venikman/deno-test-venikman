import React from 'https://dev.jspm.io/react';
import pogo from 'https://deno.land/x/pogo/main.js';
import * as flags from "https://deno.land/std@v0.27.0/flags/mod.ts";


const defaultPort = 3000;
const argPort = flags.parse(Deno.args).port;
const port = argPort ? Number(argPort) : defaultPort;
const server = pogo.server({ port });

server.router.get('/', () => {
    return  <h1>Hello from JSX!</h1>;
});

await server.start();