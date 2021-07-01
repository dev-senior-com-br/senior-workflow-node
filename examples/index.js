require('dotenv').config();
const { PlatformAppsApi } = require("../dist");
const { put } = require("axios");

/**
 * Este exemplo utiliza como base um processo previamente modelado e publicado no Workflow
 * de Solicitação de Viagens.
 */

const user = process.env.PLATFORM_USER;
const pass = process.env.PLATFORM_PASS;
const processId = process.env.PLATFORM_BPM_PROCESS_INSTANCE_ID;

const api = new PlatformAppsApi();

api.authentication.login(user, pass).then(resp => {
  console.log('Login...\n', resp.body);

  api.accessToken = JSON.parse(resp.body.jsonToken).access_token;

  api.workflow.startProcess({
    businessData: '{"root": {"destino":"Curitiba","partida":"2021-06-25","retorno":"2021-06-28","motivo":"Visita a cliente"}}',
    flowExecutionData: { actionToExecute: 'Cotação' },
    processId: processId,
    processVersion: 1,
    requester: 'senior',
    title: 'Viagem para Curitiba'
  })
  .then(resp => console.log('startProcess...', resp.body))
  .catch(err => console.error(err.response.data.message));

  api.workflow.searchTasks().then(resp => {
    console.log('searchTasks...\n', resp.body);
  }).catch(err => {
    console.error(err);
  });

  // realiza todas as operações necessárias para adicionar um anexo em uma solicitação
  addAttachmentToProcessInstance();

  api.workflow.responsePendency({
    responseData: {
      businessData: '{ "aprovado:" true }',
      flowExecutionData: {
        actionToExecute: 'Cotação'
      }
    },
    serviceFlowToken: {
      activityId: 10,
      processInstanceID: 20,
      step: 30
    }
  })
  .then(resp => console.log('responsePendency...\n', resp.body))
  .catch(err => console.error(err.response.data.message));

}).catch(err => {
  console.error(err.response.data.message);
});

/**
 * Realiza as operações newAttachment, commitAttachment e linkAttachments, que
 * resulta na criação e relação de um anexo com uma solicitação.
 */
function addAttachmentToProcessInstance() {
  api.workflow.newAttachment({ name: 'file2.txt' }).then(async (resp) => {
    console.log('newAttachment...', resp.body);
    const attachmentId = resp.body.attachment.id;

    await put(resp.body.uploadUrl, 'My text file', { headers: [{ 'Content-type': 'text/plain' }] });

    api.workflow.commitAttachment({ id: attachmentId }).then(resp => {
      console.log('commitAttachment...', resp.body);

      api.workflow.linkAttachments({ 
        ids: [ attachmentId ], 
        processInstance: processId
      })
      .then(resp => {
        console.log('linkAttachments...', resp.body);
      }).catch(err => {
        console.error(err.response.data.message);
      });
    }).catch(err => {
      console.error(err.response.data.message);
    });
  }).catch(err => {
    console.error(err.response.data.message);
  });
}

