var vm = require("vm");
var fs = require("fs");

var PD = {
  inputRequest: {},
  emitGenericEvents: jest.fn(),
  assertType: jest.fn(),
  fail: jest.fn()
}

var runTest = function(transformFile, inputRequest, fn) {
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
  runTest("transform.js", `{}`, emit)
  expect(emit).toHaveBeenCalled();
});
