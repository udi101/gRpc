const grpc = require('@grpc/grpc-js');

import {CalculatorServiceClient} from "../proto/calculator_grpc_pb";
import {SumRequest} from "../proto/calculator_pb";


const sum = (client:CalculatorServiceClient) => {
    console.log('Sum was invoked by client!');
    const req = new SumRequest().setFirstNumber(3).setSecondNumber(6)
    client.sum(req, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`The first number is: ${req.getFirstNumber()}`);
        console.log(`The second number is: ${req.getSecondNumber()}`);
        console.log(`The sum is: ${res.getResult()}`);
    });
}

const main = () => {
    const creds = grpc.credentials.createInsecure();
    const addr = 'localhost:50051';
    const client = new CalculatorServiceClient(addr, creds);

    sum(client);
}

main();