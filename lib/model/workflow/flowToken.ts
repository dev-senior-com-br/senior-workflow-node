/**
 * Representação corrigindo o processInstanceID presente no ServiceFlowToken.
 */
export interface FlowToken { 
  /**
   * Identificador da instância do proceso
   */
  processInstanceId: number;
  /**
   * Identificador da Etapa do Processo
   */
  step: number;
  /**
   * Identificador da atividade
   */
  activityId: number;
}
