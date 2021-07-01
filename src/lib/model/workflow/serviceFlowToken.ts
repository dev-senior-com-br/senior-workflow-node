/**
 * Token do processo.
 */
export interface ServiceFlowToken { 
  /**
  * Identificador da instância do proceso
  */
  processInstanceID: number;
  /**
   * Identificador da etapa do processo
   */
  step: number;
  /**
   * Identificador da atividade
   */
  activityId: number;
}
