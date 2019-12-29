import pogo from 'https://deno.land/x/pogo/main.js';

const server = pogo.server({ port : Deno.env('PORT') });

server.router.get('/', () => {
    return 'Hello, world!';
});

server.start();