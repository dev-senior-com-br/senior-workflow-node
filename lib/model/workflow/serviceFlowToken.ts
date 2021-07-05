/**
 * Representa a chave de uma pendência de um processo. - Deprecado
 * @see FlowToken
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
