require('dotenv').config();
const { PlatformAppsApi } = require("../dist");
const { put } = require("axios");

const user = process.env.PLATFORM_USER;
const pass = process.env.PLATFORM_PASS;
const processId = process.env.PLATFORM_BPM_PROCESS_INSTANCE_ID;

const api = new PlatformAppsApi();

api.authentication.login(user, pass).then(resp => {
  console.log('BODY: ' + JSON.stringify(resp.body))
  api.accessToken = JSON.parse(resp.body.jsonToken).access_token;
  api.bpm.searchTasks().then(resp => {
    console.log(resp.body);
  }).catch(err => {
    console.error(err);
  });
  let attachmentId;
  api.bpm.newAttachment({
    name: 'file2.txt'
  }).then(async resp => {
    console.log(resp.body);
    attachmentId = resp.body.attachment.id;
    await put(resp.body.uploadUrl, 'My text file', {headers: [{'Content-type': 'text/plain'}]})
    api.bpm.commitAttachment({id: attachmentId}).then(resp => {
      console.log(resp.body);
      api.bpm.linkAttachments({
        ids: [attachmentId],
        processInstance: processId
      }).then(resp => {
        console.log(resp.body);
      }).catch(err => {
        console.error(err.response.data.message);
      });
    }).catch(err => {
      console.error(err.response.data.message);
    });
  }).catch(err => {
    console.error(err.response.data.message);
  });

  // api.bpm.responsePendency({
  //   authorization: 'auth',
  //   responseData: {
  //     businessData: 'business',
  //     flowExecutionData: {
  //       actionToExecute: 'action',
  //       nextSubject: 'subject'
  //     }
  //   },
  //   serviceFlowToken: {
  //     activityId: 10,
  //     processInstanceID: 20,
  //     step: 30
  //   }
  // }).then(resp => {
  //   console.log(resp.body);
  // }).catch(err => {
  //   console.error(err.response.data.message);
  // });
  
  // api.bpm.startProcess({
  //   authorization: 'auth',
  //   businessData: 'business',
  //   flowExecutionData: {
  //     actionToExecute: 'actionToExecute',
  //     nextSubject: 'nextSubject',
  //   },
  //   processId: 10,
  //   processInstanceID: 20,
  //   processVersion: 30,
  //   requester: 'senior',
  //   title: 'Title'
  // }).then(resp => {
  //   console.log(resp.body);
  // }).catch(err => {
  //   console.error(err.response.data.message);
  // });
}).catch(err => {
  console.error(err.response.data.message);
})

