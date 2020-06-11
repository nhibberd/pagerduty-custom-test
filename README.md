# pagerduty-custom-test
```
PagerDuty Custom Event Transformer unit testing
```

Offline unit testing for [PagerDuty custome event transformer](https://developer.pagerduty.com/docs/events-api-v1/custom-event-transformer/)




```js
test('ok', () => {
  var emit = jest.fn()
  var fail = jest.fn()
  runTestWithFail("transform.js", `{}`, emit, fail)
  expect(emit).toHaveBeenCalledTimes(1);
  expect(fail).toHaveBeenCalledTimes(0);
});
```
