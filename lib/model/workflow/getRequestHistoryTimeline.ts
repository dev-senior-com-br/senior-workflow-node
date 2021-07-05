import { RequestHistoryTimelineEntry } from './requestHistoryTimelineEntry';

/**
 * Objeto de entrada da query getRequestHistoryTimeline.
 */
export interface GetRequestHistoryTimelineIn {
  /**
   * Identificador da instância do processo
   */
  processInstanceID: number;
}

/**
 * Objeto de retorno da query getRequestHistoryTimeline.
 */
export interface GetRequestHistoryTimelineOut {
  /**
   * Nome do processo
   */
  processName: string;
  /**
  * Representação da linha do tempo da solicitação
  */
  timeline: Array<RequestHistoryTimelineEntry>;
}
