const grpc = require('@grpc/grpc-js');
const {GreetServiceClient} = require('../proto/greet_grpc_pb');
const {GreetRequest} = require('../proto/greet_pb');

function doGreet(client) {
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

function main() {
    const creds = grpc.credentials.createInsecure();
    const addr = 'localhost:50051';
    const client = new GreetServiceClient(addr, creds);

    doGreet(client);
}

main();
