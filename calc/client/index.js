const grpc = require('@grpc/grpc-js');
const {CalculatorServiceClient} = require('../proto/calc_grpc_pb');
const {SumRequest} = require('../proto/calc_pb');

const sum = (client) => {
    console.log('Sum was invoked by client!');
    const req = new SumRequest().setA(3).setB(4);

    client.sum(req, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`The sum of ${req.getA()} and ${req.getB()} is ${res.getResult()}`);
    });
}

const main = () => {
    const creds = grpc.credentials.createInsecure();
    const addr = 'localhost:50051';
    const client = new CalculatorServiceClient(addr, creds);

    sum(client);
}
main();
