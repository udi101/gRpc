import {GreetResponse} from '../proto/greet_pb';
import {ServerUnaryCall, sendUnaryData, ServerWritableStream} from '@grpc/grpc-js';
import {GreetRequest} from '../proto/greet_pb';

// Define the GreetService implementation
export const greet = (call: ServerUnaryCall<GreetRequest, GreetResponse>, callback: sendUnaryData<GreetResponse>): void => {
    console.log('Greet was invoked from server!');
    const res = new GreetResponse().setResult(`Hello, ${call.request.getFirstName()}, You are the best!`);
    callback(null, res);
}


export const greetManyTimes = (call: ServerWritableStream<GreetRequest, GreetResponse>): void => {
    console.log('GreetManyTimes was invoked from server!');
    const firstName = call.request.getFirstName();

    for (let i = 0; i < 10; i++) {
    const res = new GreetResponse();
        res.setResult(`Hello, ${firstName}, You are the best!, ${i}`);
        call.write(res);
    }
    call.end();
}