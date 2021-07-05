import * as models from '../model/workflow/index';
import { SeniorApi, RequestClient } from '@seniorsistemas/senior-core';
import { RequestReturn } from '@seniorsistemas/senior-core/dist/lib/model/RequestReturn';
import { HttpMethod } from '@seniorsistemas/senior-core/dist/lib/model/HttpMethod';

export default class Workflow extends RequestClient {
  constructor(seniorApi: SeniorApi) {
    super(seniorApi, 'platform', 'workflow');
  }

  /**
   * Responde uma pendência.
   * @param responsePendencyIn Informações necessárias para responder a pendência.
   * @returns Promise contendo o retorno da requisição vazia ou um objeto de erro em caso de falha.
   */
  responsePendency(responsePendencyIn: models.ResponsePendencyIn): Promise<RequestReturn<void>> {
    const clientOptions = {
      url: this.getUrlPath('actions/responsePendency'),
      method: HttpMethod.POST,
      data: responsePendencyIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Inicia uma solicitação no BPM.
   * @param startRequestIn Informações necessárias para iniciar uma solicitação.
   * @returns Promise contendo o retorno da requisição com informações da instância de
   * processo criada ou um objeto de erro em caso de falha.
   */
  startRequest(startRequestIn: models.StartRequestIn): Promise<RequestReturn<models.StartRequestOut>> {
    const clientOptions = {
      url: this.getUrlPath('actions/startRequest'),
      method: HttpMethod.POST,
      data: startRequestIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Inicia um processo.
   * @param startProcessIn Informações necessárias para iniciar o processo.
   * @returns Promise contendo o retorno da requisição com informações da instância de
   * processo criada ou um objeto de erro em caso de falha.
   */
  startProcess(startProcessIn: models.StartProcessIn): Promise<RequestReturn<models.StartProcessOut>> {
    const clientOptions = {
      url: this.getUrlPath('actions/startProcess'),
      method: HttpMethod.POST,
      data: startProcessIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Cria uma nova representação de um anexo do Workflow.
   * @param newAttachmentIn Informações da nova representação de anexo.
   * @returns Promise contendo o retorno da requisição com informações do anexo criado
   * ou um objeto de erro em caso de falha.
   */
  newAttachment(newAttachmentIn: models.NewAttachmentIn): Promise<RequestReturn<models.NewAttachmentOut>> {
    const clientOptions = {
      url: this.getUrlPath('actions/newAttachment'),
      method: HttpMethod.POST,
      data: newAttachmentIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Faz commit de um anexo movendo ele da área temporária para permanente.
   * @param commitAttachmentIn Informações do anexo que deseja fazer commit.
   * @returns Promise contendo o retorno da requisição vazia ou um objeto de erro em caso de falha.
   */
  commitAttachment(commitAttachmentIn: models.CommitAttachmentIn): Promise<RequestReturn<void>> {
    const clientOptions = {
      url: this.getUrlPath('actions/commitAttachment'),
      method: HttpMethod.POST,
      data: commitAttachmentIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Liga determinados anexos a uma instância de processo.
   * @param linkAttachmentsIn Informações da instância do processo e dos anexos que serão relacionados.
   * @returns Promise contendo o retorno da requisição vazia ou um objeto de erro em caso de falha.
   */
  linkAttachments(linkAttachmentsIn: models.LinkAttachmentsIn): Promise<RequestReturn<void>> {
    const clientOptions = {
      url: this.getUrlPath('actions/linkAttachments'),
      method: HttpMethod.POST,
      data: linkAttachmentsIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Lista as tarefas que atendam aos filtros informados.
   * @param searchTasksIn Informações para controlar a pesquisa de tarefas.
   * @returns Promise contendo o retorno da requisição com a lista de tarefas recuperadas
   * ou um objeto de erro em caso de falha.
   */
  searchTasks(searchTasksIn: models.SearchTasksIn = {}): Promise<RequestReturn<models.SearchTasksOut>> {
    const clientOptions = {
      url: this.getUrlPath('queries/searchTasks'),
      method: HttpMethod.POST,
      data: searchTasksIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Busca um processo do Workflow.
   * @param findProcessIn Informações do processo a ser recuperado.
   * @returns Promise contendo o retorno da requisição com o processo recuperado
   * ou um objeto de erro em caso de falha.
   */
  findProcess(findProcessIn: models.FindProcessIn): Promise<RequestReturn<models.FindProcessOut>> {
    const clientOptions = {
      url: this.getUrlPath('queries/findProcess'),
      method: HttpMethod.POST,
      data: findProcessIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Obtém os processos ativos que o usuário autenticado tem algum tipo de permissão.
   * @param getProcessesListIn Informações para filtrar os processos recuperados.
   * @returns Promise contendo o retorno da requisição com a lista de processos recuperados
   * ou um objeto de erro em caso de falha.
   */
  getProcessesList(getProcessesListIn: models.GetProcessesListIn): Promise<RequestReturn<models.GetProcessesListOut>> {
    const clientOptions = {
      url: this.getUrlPath('queries/getProcessesList'),
      method: HttpMethod.POST,
      data: getProcessesListIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Obtém os processos mais utilizados pelo usuário no período especificado ou
   * nos últimos seis meses se não especificado.
   * @param getRankingProcessesIn Informações para filtrar os processos recuperados.
   * @returns Promise contendo o retorno da requisição com a lista de processos recuperados
   * ou um objeto de erro em caso de falha.
   */
  getRankingProcesses(
    getRankingProcessesIn: models.GetRankingProcessesIn = {}
  ): Promise<RequestReturn<models.GetRankingProcessesOut>> {
    const clientOptions = {
      url: this.getUrlPath('queries/getRankingProcesses'),
      method: HttpMethod.POST,
      data: getRankingProcessesIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Obtém as informações de uma instância específica de um processo (um processo já iniciado).
   * @param getProcessInstanceIn Informações da instância do processo a ser recuperada.
   * @returns Promise contendo o retorno da requisição com a instância do processo recuperada
   * ou um objeto de erro em caso de falha.
   */
  getProcessInstance(
    getProcessInstanceIn: models.GetProcessInstanceIn
  ): Promise<RequestReturn<models.GetProcessInstanceOut>> {
    const clientOptions = {
      url: this.getUrlPath('queries/getProcessInstance'),
      method: HttpMethod.POST,
      data: getProcessInstanceIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Cancela uma lista de processos que estejam em andamento.
   * @param cancelProcessInstanceIn Informação das instâncias de processos a serem canceladas.
   * @returns Promise contendo o retorno da requisição vazia ou um objeto de erro em caso de falha.
   */
  cancelProcessInstance(cancelProcessInstanceIn: models.CancelProcessInstanceIn): Promise<RequestReturn<void>> {
    const clientOptions = {
      url: this.getUrlPath('actions/cancelProcessInstance'),
      method: HttpMethod.POST,
      data: cancelProcessInstanceIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Obtém o resumo das solicitações que atendam aos filtros informados.
   * @param getRequestsResumeIn Informações para filtrar as solicitações recuperadas.
   * @returns Promise contendo o retorno da requisição com a lista de solicitações recuperadas
   * ou um objeto de erro em caso de falha.
   */
  getRequestsResume(
    getRequestsResumeIn: models.GetRequestsResumeIn
  ): Promise<RequestReturn<models.GetRequestsResumeOut>> {
    const clientOptions = {
      url: this.getUrlPath('queries/getRequestsResume'),
      method: HttpMethod.POST,
      data: getRequestsResumeIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Obtém uma linha do tempo com o registro de ações e observações de uma solicitação.
   * @param getRequestHistoryTimelineIn Informações para recuperar o histórico da solicitação.
   * @returns Promise contendo o retorno da requisição com o histórico da solicitação
   * ou um objeto de erro em caso de falha.
   */
  getRequestHistoryTimeline(
    getRequestHistoryTimelineIn: models.GetRequestHistoryTimelineIn
  ): Promise<RequestReturn<models.GetRequestHistoryTimelineOut>> {
    const clientOptions = {
      url: this.getUrlPath('queries/getRequestHistoryTimeline'),
      method: HttpMethod.POST,
      data: getRequestHistoryTimelineIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Lista as solicitações de aplicações terceiras por status.
   * @param getThirdPartyRequestByStatusIn Informações para recuperar as solicitações de terceiros.
   * @returns Promise contendo o retorno da requisição com a lista de solicitações de aplicações
   * terceiras recuperadas ou um objeto de erro em caso de falha.
   */
  getThirdPartyRequestByStatus(
    getThirdPartyRequestByStatusIn: models.GetThirdPartyRequestByStatusIn
  ): Promise<RequestReturn<models.GetThirdPartyRequestByStatusOut>> {
    const clientOptions = {
      url: this.getUrlPath('queries/getThirdPartyRequestByStatus'),
      method: HttpMethod.POST,
      data: getThirdPartyRequestByStatusIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Obtém os usuários e grupos conforme o tipo (usuário ou grupo).
   * @param getSubjectsIn Informações necessárias para recuperar os usuários por tipo.
   * @returns Promise contendo o retorno da requisição com a lista de usuários recuperados
   * ou um objeto de erro em caso de falha.
   */
  getSubjects(getSubjectsIn: models.GetSubjectsIn): Promise<RequestReturn<models.GetSubjectsOut>> {
    const clientOptions = {
      url: this.getUrlPath('queries/getSubjects'),
      method: HttpMethod.POST,
      data: getSubjectsIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Obtém um ou mais responsáveis possíveis da próxima tarefa.
   * @param getNextSubjectIn Informações para recuperar os responsáveis possíveis da próxima tarefa.
   * @returns Promise contendo o retorno da requisição com a lista de responsáveis possíveis da
   * próxima tarefa ou um objeto de erro em caso de falha.
   */
  getNextSubject(getNextSubjectIn: models.GetNextSubjectIn): Promise<RequestReturn<models.GetNextSubjectOut>> {
    const clientOptions = {
      url: this.getUrlPath('queries/getNextSubject'),
      method: HttpMethod.POST,
      data: getNextSubjectIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Obtém um ou mais responsáveis possíveis da próxima tarefa em relação à tarefa inicial do processo.
   * @param getNextSubjectFromInitialTaskIn Informações para recuperar os responsáveis possíveis da próxima tarefa.
   * @returns Promise contendo o retorno da requisição com a lista de responsáveis possíveis da
   * próxima tarefa ou um objeto de erro em caso de falha.
   */
  getNextSubjectFromInitialTask(
    getNextSubjectFromInitialTaskIn: models.GetNextSubjectFromInitialTaskIn
  ): Promise<RequestReturn<models.GetNextSubjectFromInitialTaskOut>> {
    const clientOptions = {
      url: this.getUrlPath('queries/getNextSubjectFromInitialTask'),
      method: HttpMethod.POST,
      data: getNextSubjectFromInitialTaskIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Responde pendências em lote executando uma das ações disponíveis.
   * @param batchPendenciesResponseIn Informações necessárias para responder a lista de pendências.
   * @returns Promise contendo o retorno da requisição vazia ou um objeto de erro em caso de falha.
   */
  batchPendenciesResponse(batchPendenciesResponseIn: models.BatchPendenciesResponseIn): Promise<RequestReturn<void>> {
    const clientOptions = {
      url: this.getUrlPath('actions/batchPendenciesResponse'),
      method: HttpMethod.POST,
      data: batchPendenciesResponseIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Atribui uma pendência para outro usuário.
   * @param changePendencyUserIn Informações para realizar a troca do usuário da pendência.
   * @returns Promise contendo o retorno da requisição vazia ou um objeto de erro em caso de falha.
   */
  changePendencyUser(changePendencyUserIn: models.ChangePendencyUserIn): Promise<RequestReturn<void>> {
    const clientOptions = {
      url: this.getUrlPath('actions/changePendencyUser'),
      method: HttpMethod.POST,
      data: changePendencyUserIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Obtém as opções disponíveis para execução de uma pendência.
   * @param getPendencyProcessActionsIn Informações necessárias para recuperar as opções disponíveis.
   * @returns Promise contendo o retorno da requisição com a lista de opçoes disponíveis
   * ou um objeto de erro em caso de falha.
   */
  getPendencyProcessActions(
    getPendencyProcessActionsIn: models.GetPendencyProcessActionsIn
  ): Promise<RequestReturn<models.GetPendencyProcessActionsOut>> {
    const clientOptions = {
      url: this.getUrlPath('queries/getPendencyProcessActions'),
      method: HttpMethod.POST,
      data: getPendencyProcessActionsIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Obtém as pendências do usuário autenticado conforme o tipo.
   * @param getMyPendenciesIn Informações necessárias para recuperar as pendências.
   * @returns Promise contendo o retorno da requisição com a lista de pendências recuperadas
   * ou um objeto de erro em caso de falha.
   */
  getMyPendencies(getMyPendenciesIn: models.GetMyPendenciesIn): Promise<RequestReturn<models.GetMyPendenciesOut>> {
    const clientOptions = {
      url: this.getUrlPath('queries/getMyPendencies'),
      method: HttpMethod.POST,
      data: getMyPendenciesIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }
}
