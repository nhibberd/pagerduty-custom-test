var pdtest = require("../index.js");

test('expect-throw', () => {
  expect(() => {
    pdtest.runTest("test/transform-body.js", '{}', jest.fn())
  }).toThrow();
});

test('ok', () => {
  var emit = jest.fn()
  var fail = jest.fn()
  pdtest.runTestWithFail("test/transform.js", `{}`, emit, fail)
  expect(emit).toHaveBeenCalledTimes(1);
  expect(fail).toHaveBeenCalledTimes(0);
});
