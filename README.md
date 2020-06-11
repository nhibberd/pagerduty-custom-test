# pagerduty-custom-test
```
PagerDuty Custom Event Transformer unit testing
```

Offline unit testing for [PagerDuty custome event transformer](https://developer.pagerduty.com/docs/events-api-v1/custom-event-transformer/)



## Usage
```js
var pdtest = require("pagerduty-custom-test");

test('ok', () => {
  var emit = jest.fn()

  pdtest.runTest("transform.js", `{}`, emit)

  expect(emit).toHaveBeenCalledTimes(1);
});
```
