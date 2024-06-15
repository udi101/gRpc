import { GreetResponse } from '../proto/greet_pb';
import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js';
import { GreetRequest } from '../proto/greet_pb';

// Define the GreetService implementation
export const greet = (call: ServerUnaryCall<GreetRequest, GreetResponse>, callback: sendUnaryData<GreetResponse>): void => {
    console.log('Greet was invoked from server!');
    const res = new GreetResponse().setResult(`Hello, ${call.request.getFirstName()}, You are the best!`);
    callback(null, res);
}
