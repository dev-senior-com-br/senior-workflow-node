require('dotenv').config();
const { PlatformAppsApi } = require('../dist');
const { put } = require('axios');
const { OrderField } = require('../dist/lib/model/workflow/orderField');
const { OrderDirection } = require('../dist/lib/model/workflow/orderDirection');
const { ServiceType } = require('../dist/lib/model/workflow/serviceType');
const { ProcessFilterType } = require('../dist/lib/model/workflow/processFilterType');
const { PendencyType } = require('../dist/lib/model/workflow/pendencyType');
const { SubjectKind } = require('../dist/lib/model/workflow/subjectKind');

/**
 * Este exemplo utiliza como base um processo previamente modelado e publicado no Workflow
 * de Solicitação de Viagens.
 */

const user = process.env.PLATFORM_USER;
const pass = process.env.PLATFORM_PASS;
const processId = process.env.PLATFORM_BPM_PROCESS_INSTANCE_ID;

const api = new PlatformAppsApi();

api.authentication
  .login(user, pass)
  .then(async resp => {
    console.log('Login...\n', resp.body);

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
    getNextSubject(8);
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
    console.error(err.response.data);
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
    .then(resp => console.log('startRequest...', resp.body))
    .catch(err => console.error(err.response.data));
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
    .then(resp => console.log('startProcess...', resp.body))
    .catch(err => console.error(err.response.data));
}

function getProcessesList() {
  api.workflow
    .getProcessesList({
      serviceAction: ServiceType.AllProcesses,
      onlyActiveProcesses: false,
      processFilterType: ProcessFilterType.All,
    })
    .then(resp => console.log('getProcessesList...', resp.body))
    .catch(err => console.error(err.response.data));
}

function getRankingProcesses() {
  api.workflow
    .getRankingProcesses({
      start: '2020-01-01T00:00:00.00Z',
      limit: 5,
    })
    .then(resp => console.log('getRankingProcesses...', resp.body))
    .catch(err => console.error(err.response.data));
}

function findProcess() {
  api.workflow
    .findProcess({
      id: processId,
    })
    .then(resp => console.log('findProcess...', resp.body))
    .catch(err => console.error(err.response.data));
}

function getProcessInstance(processInstanceId) {
  api.workflow
    .getProcessInstance({
      id: processInstanceId,
    })
    .then(resp => console.log('getProcessInstance...', resp.body))
    .catch(err => console.error(err.response.data));
}

function getRequestsResume() {
  api.workflow
    .getRequestsResume({
      filterProcess: [processId],
      orders: [{ key: 'processInstanceId', value: OrderDirection.DESC }],
    })
    .then(resp => console.log('getRequestsResume...', resp.body))
    .catch(err => console.error(err.response.data));
}

function getRequestHistoryTimeline(processInstanceId) {
  api.workflow
    .getRequestHistoryTimeline({
      processInstanceID: processInstanceId,
    })
    .then(resp => console.log('getRequestHistoryTimeline...', resp.body))
    .catch(err => console.error(err.response.data));
}

function getThirdPartyRequestByStatus() {
  api.workflow
    .getThirdPartyRequestByStatus({
      processKey: 'process_key',
      status: PendencyType.Pending,
    })
    .then(resp => console.log('getThirdPartyRequestByStatus...', resp.body))
    .catch(err => console.error(err.response.data));
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
    .catch(err => console.error(err.response.data));
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
    .catch(err => console.error(err.response.data));
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
    .catch(err => console.error(err.response.data));
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
    .catch(err => console.error(err.response.data));
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
          console.log('commitAttachment...', resp.body);

          api.workflow
            .linkAttachments({
              ids: [attachmentId],
              processInstance: processInstanceId,
            })
            .then(resp => console.log('linkAttachments...', resp.body))
            .catch(err => console.error(err.response.data));
        })
        .catch(err => {
          console.error(err.response.data);
        });
    })
    .catch(err => {
      console.error(err.response.data);
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
    .catch(err => console.error(err.response.data));
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
    .catch(err => console.error(err.response.data));
}

function cancelProcessInstance(processInstanceId) {
  api.workflow
    .cancelProcessInstance({
      ids: [processInstanceId],
      reason: 'Voo cancelado',
    })
    .then(resp => console.log('cancelProcessInstance...\n', resp.body))
    .catch(err => console.error(err.response.data));
}
