import { ServiceFlowToken } from './serviceFlowToken';

/**
 * Resumo de uma solicitação.
 */
export interface MyRequestsResume { 
  /**
   * Identificador da instância do processo
   */
  processInstanceId: number;
  /**
   * Nome do processo
   */
  processName: string;
  /**
   * Data de criação da soliciatção (Formato ISO_DATE_TIME: "2016-03-29T12:56:57.155Z")
   */
  startDate: Date;
  /**
   * Data de enceramento da solicitação (Formato ISO_DATE_TIME: "2016-03-29T12:56:57.155Z")
   */
  endDate: Date;
  /**
   * Status da solicitação
   */
  status: string;
  /**
   * Nome da atividade atual
   */
  activityName: string;
  /**
   * Usuário atual da tarefa
   */
  taskUser: string;
  /**
   * Data de expiração (Formato ISO_DATE_TIME: "2016-03-29T12:56:57.155Z")
   */
  expirationDate: Date;
  /**
   * Identificador do processo
   */
  processId: number;
  /**
   * Versão do processo
   */
  processVersion: number;
  /**
   * Indica se o processo desta solicitação é integrado ou não
   */
  embedded: boolean;
  /**
   * Detalhes da solicitação
   */
  detail: string;
  /**
   * Identificador de uma pendência
   */
  flowToken?: Array<ServiceFlowToken>;
}
