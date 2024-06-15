<b><u>This is it </u></b>

This is a repo to practice grpc according to the Udemy's course "gRPC [Node.js] MasterClass: Build Modern API & Microservices".

Generating protos:

proto:generate:greet

proto:generate:calc

In order to see client/server comunication you got to open two terminals and run the following commands:

```zsh
npm run calc:server
```

```zsh
npm run calc:client
```

This will create a grpc server and a client that will communicate with each other.
You can also repeat this for the greet service but they are running the server on
the same port, so you can't run both at the same time.