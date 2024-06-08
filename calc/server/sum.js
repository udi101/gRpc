
const {SumResponse} = require('../proto/calc_pb');

exports.sum = (call, callback) => {
    console.log('Sum was invoked from server!');
    const res = new SumResponse()
        .setResult(call.request.getA() + call.request.getB());
    callback(null, res);
}