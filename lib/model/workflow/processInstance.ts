import { ServiceFlowToken } from './serviceFlowToken';
import { ServiceProcess } from './serviceProcess';
import { ServiceSubject } from './serviceSubject';

/**
 * Representa uma instância de processo.
 */
export interface ProcessInstance { 
  /**
   * Identificador da instância 
   */
  id: number;
  /**
   * Processo da instância
   */
  process: ServiceProcess;
  /**
   * Quem iniciou a solicitação
   */
  startedSubject: ServiceSubject;
  /**
   * Quem cancelou a solicitação
   */
  cancelSubject: ServiceSubject;
  /**
   * Data de início (Formato ISO_DATE_TIME: "2016-03-29T12:56:57.155Z")
   */
  startDate: Date;
  /**
   * Data da última alteração (Formato ISO_DATE_TIME: "2016-03-29T12:56:57.155Z")
   */
  lastUptadeDate: Date;
  /**
   * Data de término (Formato ISO_DATE_TIME: "2016-03-29T12:56:57.155Z")
   */
  endDate: Date;
  /**
   * 
   */
  flowExecutionStatus: string;
  /**
   * Mensagem de enceramento
   */
  endMessage: string;
  /**
   * Descrição da instância
   */
  description: string;
  /**
   * Token do processo
   */
  flowToken: Array<ServiceFlowToken>;
  /**
   * Data de expiração (Formato ISO_DATE_TIME: "2016-03-29T12:56:57.155Z")
   */
  taskExpiration: Date;
}
