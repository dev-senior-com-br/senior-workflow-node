import { KeyValueRecord } from './keyValueRecord';
import { MyRequestKind } from './myRequestKind';
import { MyRequestsResume } from './myRequestsResume';
import { ReportTaskExpirationStatus } from './reportTaskExpirationStatus';

/**
 * Objeto de entrada da query getRequestsResume.
 */
export interface GetRequestsResumeIn {
  /**
   * Índice inicial da consulta
   */
  start?: number;
  /**
  * Quantidade de itens da consulta
  */
  limit?: number;
  /**
  * Filtro com lista de identificadores de processos
  */
  filterProcess?: Array<number>;
  /**
  * Filtro para buscar pelo nome da pendência ou valor das variáveis do processo
  */
  filterValue?: string;
  /**
  * Filtro por status da solicitação
  */
  filter?: Array<MyRequestKind>;
  /**
  * Lista com tipos de ordenação informando campo e tipo (asc ou desc)
  */
  orders?: Array<KeyValueRecord>;
  /**
  * Situação atual da solicitação
  */
  situation?: ReportTaskExpirationStatus;
}

/**
 * Objeto de retorno da query getRequestsResume.
 */
export interface GetRequestsResumeOut {
  /**
   * Lista com resumo das solicitações
   */
  requestsResume: Array<MyRequestsResume>;
  /**
  * Total de instâncias de processos
  */
  total: number;
} 
