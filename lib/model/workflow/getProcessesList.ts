import { ProcessFilterType } from './processFilterType';
import { ServiceProcess } from './serviceProcess';
import { ServiceType } from './serviceType';

/**
 * Objeto de entrada da query getProcessesList.
 */
export interface GetProcessesListIn {
  /**
   * Tipo de ação que indica quais processos serão listados
   */
  serviceAction: ServiceType;
  /**
  * Filtro por tipo de processo
  */
  processFilterType?: ProcessFilterType;
  /**
  * Filtro por tag
  */
  tagFilter?: string;
  /**
  * Apenas retorna processos ativos
  */
  onlyActiveProcesses?: boolean;
  /**
  * A partir de qual data buscar eventos de serviços externos (Formato ISO_DATE_TIME: "2016-03-29T12:56:57.155Z")
  */
  serviceEventStartDate?: Date;
}

/**
 * Objeto de retorno da query getProcessesList.
 */
export interface GetProcessesListOut {
  /**
   * Lista de processos
   */
  processes: Array<ServiceProcess>;
}
