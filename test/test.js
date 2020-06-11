var vm = require("vm");
var fs = require("fs");

var PD = {
  inputRequest: {},
  emitGenericEvents: jest.fn(),
  assertType: jest.fn(),
  fail: jest.fn()
}

var runTest = function(transformFile, inputRequest, fn) {
  runTestWithFail(transformFile, inputRequest, fn, jest.fn())
}

var runTestWithFail = function(transformFile, inputRequest, fn, failFn) {
  var data = fs.readFileSync(transformFile);
  PD.inputRequest = inputRequest
  PD.emitGenericEvents = fn
  var rawContext = {
    PD: PD
  }
  var context = vm.createContext(rawContext);
  var script = new vm.Script(data);
  script.runInContext(context);
}

test('expect-throw', () => {
  expect(() => {
    runTest("transform-body.js", '{}', jest.fn())
  }).toThrow();
});

test('ok', () => {
  var emit = jest.fn()
  var fail = jest.fn()
  runTestWithFail("transform.js", `{}`, emit, fail)
  expect(emit).toHaveBeenCalledTimes(1);
  expect(fail).toHaveBeenCalledTimes(0);
});
