import { RequestClient, SeniorApi } from '@seniorsistemas/senior-core';
import { RequestReturn } from '@seniorsistemas/senior-core/dist/lib/model/RequestReturn';
import { HttpMethod } from '@seniorsistemas/senior-core/dist/lib/model/HttpMethod';
import {
  ListTasksIn,
  ListTasksOut,
  ResponsePendencyIn,
  ResponsePendencyOut,
  StartProcessIn,
  StartProcessOut,
} from '../model';
import { SearchTasksIn, SearchTasksOut } from '../model/searchTasks';

export default class BPM extends RequestClient {
  constructor(seniorApi: SeniorApi) {
    super(seniorApi, 'platform', 'workflow');
  }

  /**
   * Action para responder uma pendencia
   * @param {responsePendencyIn}
   * @returns {Promise<RequestReturn<ResponsePendencyOut>>}
   */
  responsePendency(responsePendencyIn: ResponsePendencyIn): Promise<RequestReturn<ResponsePendencyOut>> {
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
   * @param {StartProcessIn}
   * @returns {Promise<RequestReturn<StartProcessOut>>}
   */
  startProcess(startProcessIn: StartProcessIn): Promise<RequestReturn<StartProcessOut>> {
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
   * Query para listar tarefas na nova central de tarefas
   * @param {ListTasksIn}
   * @returns {Promise<RequestReturn<ListTasksOut>>}
   */
  listTasks(listTasksIn: ListTasksIn): Promise<RequestReturn<ListTasksOut>> {
    const clientOptions = {
      url: this.getUrlPath('queries/listTasks'),
      method: HttpMethod.POST,
      data: {
        ...listTasksIn,
      },
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  /**
   * Query para pesquisar as tasks
   * @param {SearchTasksIn}
   * @returns {Promise<RequestReturn<SearchTasksOut>>}
   */
  searchTasks(searchTasksIn: SearchTasksIn = {}): Promise<RequestReturn<SearchTasksOut>> {
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
}
