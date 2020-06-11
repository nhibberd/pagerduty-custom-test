var body = JSON.parse(PD.inputRequest.rawBody);

var normalized_event = {
  event_type: PD.Trigger,
  description: 'Raw  event',
  details: body.Message
};
PD.emitGenericEvents([normalized_event]);
