import {sendUnaryData, ServerUnaryCall} from "@grpc/grpc-js";
import {SumRequest, SumResponse} from "../proto/calculator_pb";

export const sum = (call: ServerUnaryCall<SumRequest, SumResponse>, callback: sendUnaryData<SumResponse>) => {
    console.log('Sum was invoked from server!');
    const firstNumber = call.request.getFirstNumber();
    const secondNumber = call.request.getSecondNumber();
    const res = new SumResponse().setResult(firstNumber + secondNumber);
    callback(null, res)
}