// package: Greet
// file: greet.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as greet_pb from "./greet_pb";

interface IGreetServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    greet: IGreetServiceService_IGreet;
    greetManyTimes: IGreetServiceService_IGreetManyTimes;
}

interface IGreetServiceService_IGreet extends grpc.MethodDefinition<greet_pb.GreetRequest, greet_pb.GreetResponse> {
    path: "/Greet.GreetService/Greet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<greet_pb.GreetRequest>;
    requestDeserialize: grpc.deserialize<greet_pb.GreetRequest>;
    responseSerialize: grpc.serialize<greet_pb.GreetResponse>;
    responseDeserialize: grpc.deserialize<greet_pb.GreetResponse>;
}
interface IGreetServiceService_IGreetManyTimes extends grpc.MethodDefinition<greet_pb.GreetRequest, greet_pb.GreetResponse> {
    path: "/Greet.GreetService/GreetManyTimes";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<greet_pb.GreetRequest>;
    requestDeserialize: grpc.deserialize<greet_pb.GreetRequest>;
    responseSerialize: grpc.serialize<greet_pb.GreetResponse>;
    responseDeserialize: grpc.deserialize<greet_pb.GreetResponse>;
}

export const GreetServiceService: IGreetServiceService;

export interface IGreetServiceServer {
    greet: grpc.handleUnaryCall<greet_pb.GreetRequest, greet_pb.GreetResponse>;
    greetManyTimes: grpc.handleServerStreamingCall<greet_pb.GreetRequest, greet_pb.GreetResponse>;
}

export interface IGreetServiceClient {
    greet(request: greet_pb.GreetRequest, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    greet(request: greet_pb.GreetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    greet(request: greet_pb.GreetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    greetManyTimes(request: greet_pb.GreetRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greet_pb.GreetResponse>;
    greetManyTimes(request: greet_pb.GreetRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greet_pb.GreetResponse>;
}

export class GreetServiceClient extends grpc.Client implements IGreetServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public greet(request: greet_pb.GreetRequest, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    public greet(request: greet_pb.GreetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    public greet(request: greet_pb.GreetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    public greetManyTimes(request: greet_pb.GreetRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greet_pb.GreetResponse>;
    public greetManyTimes(request: greet_pb.GreetRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greet_pb.GreetResponse>;
}
