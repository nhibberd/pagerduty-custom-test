// example event, see https://developer.pagerduty.com/docs/events-api-v1/custom-event-transformer/#examples
var normalized_event = {
  event_type: PD.Trigger,
  description: 'Raw event',
  details: PD.inputRequest
};
PD.emitGenericEvents([normalized_event]);
