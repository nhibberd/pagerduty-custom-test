const vm = require("vm");
const fs = require('fs');

var PD = {
  inputRequest: {},
  emitGenericEvents: jest.fn(),
  assertType: jest.fn(),
  fail: jest.fn()
}

exports.runTest = function(
  transformFile,
  inputRequest,
  fn
) {
  runTestWithFail(transformFile, inputRequest, fn, jest.fn());
}

exports.runTestWithFail = function(
  transformFile,
  inputRequest,
  fn,
  failFn
) {
  var data = fs.readFileSync(transformFile);
  PD.inputRequest = inputRequest;
  PD.emitGenericEvents = fn;
  var rawContext = {
    PD: PD
  }
  var context = vm.createContext(rawContext);
  var script = new vm.Script(data);
  script.runInContext(context);
}
