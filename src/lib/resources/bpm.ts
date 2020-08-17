import * as models from '../model';
import { SeniorApi, RequestClient } from '@seniorsistemas/senior-core';
import { RequestReturn } from '@seniorsistemas/senior-core/dist/lib/model/RequestReturn';
import { HttpMethod } from '@seniorsistemas/senior-core/dist/lib/model/HttpMethod';

export default class BPM extends RequestClient {
  constructor(seniorApi: SeniorApi) {
    super(seniorApi, 'platform', 'workflow');
  }

  /**
   * Action para responder uma pendencia
   * @param {models.ResponsePendencyIn} responsePendencyIn
   * @returns {Promise<RequestReturn<models.ResponsePendencyOut>>}
   */
  responsePendency(responsePendencyIn: models.ResponsePendencyIn): Promise<RequestReturn<models.ResponsePendencyOut>> {
    const clientOptions = {
      url: this.getUrlPath('actions/responsePendency'),
      method: HttpMethod.POST,
      data: {
        ...responsePendencyIn,
      },
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Action para iniciar um processo
   * @param {models.StartProcessIn} startProcessIn
   * @returns {Promise<RequestReturn<models.StartProcessOut>>}
   */
  startProcess(startProcessIn: models.StartProcessIn): Promise<RequestReturn<models.StartProcessOut>> {
    const clientOptions = {
      url: this.getUrlPath('actions/startProcess'),
      method: HttpMethod.POST,
      data: {
        ...startProcessIn,
      },
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
      data: {
        ...searchTasksIn,
      },
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
  commitAttachment(commitAttachmentIn: models.CommitAttachmentIn): Promise<RequestReturn<models.CommitAttachmentOut>> {
    const clientOptions = {
      url: this.getUrlPath('actions/commitAttachment'),
      method: HttpMethod.POST,
      data: {
        ...commitAttachmentIn,
      },
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
      data: {
        ...newAttachmentIn,
      },
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
  linkAttachments(linkAttachmentsIn: models.LinkAttachmentsIn): Promise<RequestReturn<models.LinkAttachmentsOut>> {
    const clientOptions = {
      url: this.getUrlPath('actions/linkAttachments'),
      method: HttpMethod.POST,
      data: {
        ...linkAttachmentsIn,
      },
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }
}
