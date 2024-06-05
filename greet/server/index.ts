const grpc = require('@grpc/grpc-js');
const addr = 'localhost:50051';

const cleanup = (server: any) => {
    console.log('Shutting down server...');
    if (server) {
        server.forceShutdown();
    }
}

const main = () => {
    const server: any = new grpc.Server();
    const creds = grpc.ServerCredentials.createInsecure();
    process.on('SIGINT', () => {
        console.log('Shutting down server...');
        cleanup(server)
    });


    server.bindAsync(addr, creds, (err: any) => {
        if (err) {
            console.error(err);
            return cleanup(server)
        }
        console.log(`Server listening on ${addr}`);
    })
}

main();