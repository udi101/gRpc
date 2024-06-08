const {GreetResponse} = require('../proto/greet_pb');

exports.greet = (call, callback) => {
    console.log('Greet was invoked from server!');
    const res = new GreetResponse()
        .setResult(`Hello, ${call.request.getFirstName()}, You are the best!`);
    callback(null, res);
}
