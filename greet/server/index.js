const grpc = require('@grpc/grpc-js');
const serviceImpl = require('./service_impl');
const {GreetServiceService} = require('../proto/greet_grpc_pb');

const addr = 'localhost:50051';

const cleanup = (server) => {
    console.log('Shutting down server...');
    if (server) {
        server.forceShutdown();
    }
}

const main = () => {
    console.log('Starting server...')
    const server = new grpc.Server();
    const creds = grpc.ServerCredentials.createInsecure();
    process.on('SIGINT', () => {
        console.log('Shutting down server...');
        cleanup(server);
    });

    server.addService(GreetServiceService, serviceImpl);
    server.bindAsync(addr, creds, (err, port) => {
        if (err) {
            console.error(err);
            return cleanup(server);
        }
        console.log(`Server listening on ${addr}`);
    });
}

main();
