import { ServiceProcess } from './serviceProcess';

/**
 * Objeto de entrada da query findProcess.
 */
export interface FindProcessIn {
  /**
   * Identificador do processo
   */
  id: number;
}

/**
 * Objeto de retorno da query findProcess.
 */
export interface FindProcessOut {
  /**
   * Processo recuperado
   */
  process: ServiceProcess;
}
