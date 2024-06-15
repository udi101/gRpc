const grpc = require('@grpc/grpc-js');

import {GreetServiceClient} from './../proto/greet_grpc_pb';
import {GreetRequest} from './../proto/greet_pb';

const doGreet = (client: GreetServiceClient) => {
    console.log('DoGreet was invoked by client!');
    const req = new GreetRequest().setFirstName('Udi');
    client.greet(req, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`The first name is: ${req.getFirstName()}`);
        console.log(`Greeting ${res.getResult()}`);
    });
}

const main = () => {
    const creds = grpc.credentials.createInsecure();
    const addr = 'localhost:50051';
    const client = new GreetServiceClient(addr, creds);

    doGreet(client);

}


main();
