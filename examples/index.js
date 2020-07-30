const { PlatformAppsApi } = require("../dist");

const user = process.env.PLATFORM_USER;
const pass = process.env.PLATFORM_PASS;

const api = new PlatformAppsApi();

api.authentication.login(user, pass).then(resp => {
  console.log('BODY: ' + JSON.stringify(resp.body))
  api.accessToken = JSON.parse(resp.body.jsonToken).access_token;
  api.bpm.listTasks({
    kind: "TASK",
    groupBy: 'CATEGORY',
    start: 0,
    limit: 20,
    startTask: 0,
    limitTask: 20    
  }).then(resp => {
    console.log(resp.body);
  }).catch(err => {
    console.error(err);
  });
  
  api.bpm.responsePendency({
    authorization: 'auth',
    responseData: {
      businessData: 'business',
      flowExecutionData: {
        actionToExecute: 'action',
        nextSubject: 'subject'
      }
    },
    serviceFlowToken: {
      activityId: 10,
      processInstanceID: 20,
      step: 30
    }
  }).then(resp => {
    console.log(resp.body);
  }).catch(err => {
    console.error(err);
  });
  
  api.bpm.startProcess({
    authorization: 'auth',
    businessData: 'business',
    flowExecutionData: {
      actionToExecute: 'actionToExecute',
      nextSubject: 'nextSubject',
    },
    processId: 10,
    processInstanceID: 20,
    processVersion: 30,
    requester: 'senior',
    title: 'Title'
  }).then(resp => {
    console.log(resp.body);
  }).catch(err => {
    console.error(err);
  });
}).catch(err => {
  console.error(err);
})

