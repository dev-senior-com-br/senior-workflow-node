import { FlowExecutionData } from './flowExecutionData';
import { ServiceFlowToken } from './serviceFlowToken';

/**
 * Objeto de entrada da action responsePendency.
 */
export interface ResponsePendencyIn {
  /**
   * Token do processo
   */
  serviceFlowToken: ServiceFlowToken;
  /**
   * Variáveis de Negócio do Processo
   */
  responseData?: {
    /**
     * Dados de negócio do processo. Ex: { "businessData": { "campo1": "valor1", "campo2": 2 }}
     */
    businessData?: string;
    /**
     * Informação para Fluxo de Execução do processo
     */
    flowExecutionData?: FlowExecutionData;
  };
  /**
   * String de autorização executada da tarefa do workflow
   */
  authorization?: string;
  /**
   * Comentário para solicitação
   */
  comment?: string;
}
