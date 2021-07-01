import * as models from '../model/workflow/index';
import { SeniorApi, RequestClient } from '@seniorsistemas/senior-core';
import { RequestReturn } from '@seniorsistemas/senior-core/dist/lib/model/RequestReturn';
import { HttpMethod } from '@seniorsistemas/senior-core/dist/lib/model/HttpMethod';

export default class Workflow extends RequestClient {
  constructor(seniorApi: SeniorApi) {
    super(seniorApi, 'platform', 'workflow');
  }

  /**
   * Action para responder uma pendencia
   * @param responsePendencyIn
   * @returns
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
   *
   * @param startRequestIn
   * @returns Promise contendo a resposta da requisição.
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
   * @returns Promise contendo a resposta da requisição.
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
   * Action que faz commit de um anexo movendo ele da área temporária para permanente
   * @param {models.CommitAttachmentIn} commitAttachmentIn
   * @returns {Promise<RequestReturn<models.CommitAttachmentOut>>}
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
   * Action que cria uma nova representação de um anexo do Workflow
   * @param {models.NewAttachmentIn} newAttachmentIn
   * @returns {Promise<models.RequestReturn<NewAttachmentOut>>}
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
   * Liga determinados anexos a uma instância de processo
   * @param {models.LinkAttachmentsIn} linkAttachmentsIn
   * @returns {Promise<RequestReturn<models.LinkAttachmentsOut>>}
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
   * Query para pesquisar as tasks
   * @param {models.SearchTasksIn} searchTasksIn
   * @returns {Promise<RequestReturn<models.SearchTasksOut>>}
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
