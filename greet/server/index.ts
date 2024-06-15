import * as grpc from '@grpc/grpc-js';
import {greet, greetManyTimes} from './greet';
import {GreetServiceService} from "../proto/greet_grpc_pb";

const addr: string = 'localhost:50051';

const cleanup = (server: grpc.Server): void => {
    console.log('Shutting down server...');
    if (server) {
        server.forceShutdown();
    }
}

const main = (): void => {
    console.log('Starting server...');
    const server: grpc.Server = new grpc.Server();
    const creds: grpc.ServerCredentials = grpc.ServerCredentials.createInsecure();
    process.on('SIGINT', () => {
        console.log('Shutting down server...');
        cleanup(server);
    });


    server.addService(GreetServiceService, {greet, greetManyTimes});
    server.bindAsync(addr, creds, (err: Error | null, port: number) => {
        if (err) {
            console.error(err);
            return cleanup(server);
        }
        console.log(`Server listening on ${addr}`);
    });
}

main();
