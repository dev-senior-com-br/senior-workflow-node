require('dotenv').config();
const {
  OrderDirection,
  OrderField,
  PendencyType,
  PlatformAppsApi,
  ProcessFilterType,
  ServiceType,
  SubjectKind,
} = require('../dist');
const { put } = require('axios');

/**
 * Este exemplo utiliza como base um processo previamente modelado e publicado no Workflow
 * de Solicitação de Viagens.
 */

const username = process.env.PLATFORM_USER;
const password = process.env.PLATFORM_PASS;
// identificador de um processo previamente criado e publicado no Workflow
const processId = process.env.PLATFORM_BPM_PROCESS_ID;

const api = new PlatformAppsApi();

api.authentication
  .login({ username, password })
  .then(async resp => {
    console.log('login...\n', resp.body);

    api.accessToken = JSON.parse(resp.body.jsonToken).access_token;

    // inicia uma solicitação, criando uma instância do processo
    // também é possível utilizar o startProcess() para a mesma finalidade
    const processInstanceId = startRequest();

    // realiza todas as operações necessárias para adicionar um anexo em uma solicitação
    addAttachmentToProcessInstance(processInstanceId);

    // recupera lista de todos os processos
    getProcessesList();

    // recupera lista dos processos utilizados recentemente
    getRankingProcesses();

    // recupera os dados do processo de exemplo
    findProcess();

    // recupera a solicitação (instância do processo) criada anteriormente
    getProcessInstance(processInstanceId);

    // recupera a lista de solicitações do processo de exemplo
    getRequestsResume();

    // recupera o histórico da solicitação informada
    getRequestHistoryTimeline(processInstanceId);

    // lista as solicitações de aplicações terceiras
    getThirdPartyRequestByStatus();

    // recupera todos os possíveis responsáveis
    getSubjects();

    // recupera todos os possíveis responsáveis para a próxima tarefa
    getNextSubject(processInstanceId);
    getNextSubjectFromInitialTask();

    // recupera lista de tarefas filtradas pelo 'processId' e ordenadas pela data de expiração
    searchTasks();

    // recupera todas as pendências do usuário autenticado
    getMyPendencies();

    // recupera as ações possíveis para uma pendência
    getPendencyProcessActions(processInstanceId);

    // altera o usuário responsável pela solicitação
    changePendencyUser(processInstanceId);

    // responde uma pendência ou uma lista de pendências
    responsePendency(processInstanceId);
    batchPendenciesResponse(processInstanceId);

    // cancela a solicitação iniciada anteriormente
    cancelProcessInstance(processInstanceId);
  })
  .catch(err => {
    console.error(err);
  });

function startRequest() {
  api.workflow
    .startRequest({
      processId: processId,
      businessData: {
        destino: 'Curitiba',
        partida: '2021-06-25',
        retorno: '2021-06-28',
        motivo: 'Visita a cliente',
      },
      title: 'Viagem para Curitiba',
      actionToExecute: 'Analisar',
    })
    .then(resp => console.log('startRequest...\n', resp.body))
    .catch(err => console.error('startRequest...\n', err.response.data));
}

function startProcess() {
  api.workflow
    .startProcess({
      businessData:
        '{"root": {"destino":"Curitiba","partida":"2021-06-25","retorno":"2021-06-28","motivo":"Visita a cliente"}}',
      flowExecutionData: { actionToExecute: 'Cotação' },
      processId: processId,
      processVersion: 1,
      requester: 'senior',
      title: 'Viagem para Curitiba',
    })
    .then(resp => console.log('startProcess...\n', resp.body))
    .catch(err => console.error('startProcess...\n', err.response.data));
}

function getProcessesList() {
  api.workflow
    .getProcessesList({
      serviceAction: ServiceType.AllProcesses,
      onlyActiveProcesses: false,
      processFilterType: ProcessFilterType.All,
    })
    .then(resp => console.log('getProcessesList...\n', resp.body))
    .catch(err => console.error('getProcessesList...\n', err.response.data));
}

function getRankingProcesses() {
  api.workflow
    .getRankingProcesses({
      start: '2020-01-01T00:00:00.00Z',
      limit: 5,
    })
    .then(resp => console.log('getRankingProcesses...\n', resp.body))
    .catch(err => console.error('getRankingProcesses...\n', err.response.data));
}

function findProcess() {
  api.workflow
    .findProcess({
      id: processId,
    })
    .then(resp => console.log('findProcess...\n', resp.body))
    .catch(err => console.error('findProcess...\n', err.response.data));
}

function getProcessInstance(processInstanceId) {
  api.workflow
    .getProcessInstance({
      processInstance: processInstanceId,
    })
    .then(resp => console.log('getProcessInstance...\n', resp.body))
    .catch(err => console.error('getProcessInstance...\n', err.response.data));
}

function getRequestsResume() {
  api.workflow
    .getRequestsResume({
      filterProcess: [processId],
      orders: [{ key: 'processInstanceId', value: OrderDirection.DESC }],
    })
    .then(resp => console.log('getRequestsResume...\n', resp.body))
    .catch(err => console.error('getRequestsResume...\n', err.response.data));
}

function getRequestHistoryTimeline(processInstanceId) {
  api.workflow
    .getRequestHistoryTimeline({
      processInstanceID: processInstanceId,
    })
    .then(resp => console.log('getRequestHistoryTimeline...\n', resp.body))
    .catch(err => console.error('getRequestHistoryTimeline...\n', err.response.data));
}

function getThirdPartyRequestByStatus() {
  api.workflow
    .getThirdPartyRequestByStatus({
      processKey: 'process_key',
      status: PendencyType.Pending,
    })
    .then(resp => console.log('getThirdPartyRequestByStatus...\n', resp.body))
    .catch(err => console.error('getThirdPartyRequestByStatus...\n', err.response.data));
}

function getSubjects() {
  api.workflow
    .getSubjects({
      type: SubjectKind.User,
    })
    .then(resp => console.log('getSubjects...\n', resp.body))
    .catch(err => console.error('getSubjects...\n', err.response.data));
}

function getNextSubject(processInstanceId) {
  api.workflow
    .getNextSubject({
      serviceFlowToken: {
        activityId: 1,
        processInstanceID: processInstanceId,
        step: 1,
      },
      sequenceName: 'Prosseguir',
    })
    .then(resp => console.log('getNextSubject...\n', resp.body))
    .catch(err => console.error('getNextSubject...\n', err.response.data));
}

function getNextSubjectFromInitialTask() {
  api.workflow
    .getNextSubjectFromInitialTask({
      processId: processId,
      processVersion: 10,
      sequenceName: 'Prosseguir',
    })
    .then(resp => console.log('getNextSubjectFromInitialTask...\n', resp.body))
    .catch(err => console.error('getNextSubjectFromInitialTask...\n', err.response.data));
}

function searchTasks() {
  api.workflow
    .searchTasks({
      orders: [{ field: OrderField.EXPIRATION_DATE, direction: OrderDirection.ASC }],
      filter: { processes: [processId] },
    })
    .then(resp => console.log('searchTasks...\n', resp.body))
    .catch(err => console.error('searchTasks...\n', err.response.data));
}

function getMyPendencies() {
  api.workflow
    .getMyPendencies({
      pendencyRequestParameters: {
        type: PendencyType.Pending,
        processFilterType: ProcessFilterType.All,
      },
    })
    .then(resp => console.log('getMyPendencies...\n', resp.body))
    .catch(err => console.error('getMyPendencies...\n', err.response.data));
}

function getPendencyProcessActions(processInstanceId) {
  api.workflow
    .getPendencyProcessActions({
      serviceFlowToken: {
        activityId: 10,
        processInstanceID: processInstanceId,
        step: 30,
      },
    })
    .then(resp => console.log('getPendencyProcessActions...\n', resp.body))
    .catch(err => console.error('getPendencyProcessActions...\n', err.response.data));
}

function changePendencyUser(processInstanceId) {
  api.workflow
    .changePendencyUser({
      serviceFlowTokens: {
        activityId: 10,
        processInstanceID: processInstanceId,
        step: 30,
      },
      subject: {
        subjectKind: SubjectKind.User,
        userCode: 1,
        name: 'Exemplo',
      },
    })
    .then(resp => console.log('changePendencyUser...\n', resp.body))
    .catch(err => console.error('changePendencyUser...\n', err.response.data));
}

/**
 * Realiza as operações newAttachment, commitAttachment e linkAttachments, que
 * resulta na criação e relação de um anexo com uma solicitação.
 */
function addAttachmentToProcessInstance(processInstanceId) {
  api.workflow
    .newAttachment({ name: 'file2.txt' })
    .then(async resp => {
      console.log('newAttachment...', resp.body);
      const attachmentId = resp.body.attachment.id;

      await put(resp.body.uploadUrl, 'My text file', { headers: [{ 'Content-type': 'text/plain' }] });

      api.workflow
        .commitAttachment({ id: attachmentId })
        .then(resp => {
          console.log('commitAttachment...\n', resp.body);

          api.workflow
            .linkAttachments({
              ids: [attachmentId],
              processInstance: processInstanceId,
            })
            .then(resp => console.log('linkAttachments...\n', resp.body))
            .catch(err => console.error('linkAttachments...\n', err.response.data));
        })
        .catch(err => {
          console.error('commitAttachment...\n', err.response.data);
        });
    })
    .catch(err => {
      console.error('newAttachment...\n', err.response.data);
    });
}

function responsePendency(processInstanceId) {
  api.workflow
    .responsePendency({
      responseData: {
        businessData: '{ "aprovado:" true }',
        flowExecutionData: {
          actionToExecute: 'Cotação',
        },
      },
      serviceFlowToken: {
        activityId: 10,
        processInstanceID: processInstanceId,
        step: 30,
      },
    })
    .then(resp => console.log('responsePendency...\n', resp.body))
    .catch(err => console.error('responsePendency...\n', err.response.data));
}

function batchPendenciesResponse(processInstanceId) {
  api.workflow
    .batchPendenciesResponse({
      flowTokens: [
        {
          processInstanceId: processInstanceId,
          step: 30,
          activityId: 10,
        },
      ],
      authorization: api.accessToken,
    })
    .then(resp => console.log('batchPendenciesResponse...\n', resp.body))
    .catch(err => console.error('batchPendenciesResponse...\n', err.response.data));
}

function cancelProcessInstance(processInstanceId) {
  api.workflow
    .cancelProcessInstance({
      ids: [processInstanceId],
      reason: 'Voo cancelado',
    })
    .then(resp => console.log('cancelProcessInstance...\n', resp.body))
    .catch(err => console.error('cancelProcessInstance...\n', err.response.data));
}
