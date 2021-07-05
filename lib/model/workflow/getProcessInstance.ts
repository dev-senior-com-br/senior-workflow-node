import { ProcessInstance } from './processInstance';

/**
 * Objeto de entrada da query getProcessInstance.
 */
export interface GetProcessInstanceIn {
  /**
   * Identificador da instância do processo
   */
  processInstance: number;
}

/**
 * Objeto de retorno da query getProcessInstance.
 */
export interface GetProcessInstanceOut {
  /**
   * Objeto que representa uma instância de processo
   */
  processInstance: ProcessInstance;
} 
