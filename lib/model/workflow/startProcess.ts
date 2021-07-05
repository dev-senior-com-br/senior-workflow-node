import { FlowExecutionData } from './flowExecutionData';

/**
 * Objeto de entrada da action startProcess.
 */
export interface StartProcessIn {
  /**
   * Quando o usuário quer definir o número da instância do processo.
   */
  processInstanceID?: number;
  /**
   * Caso seja passado o processInstanceId, indica que a geração do record deve 
   * ser feita pelo BPM e não foi gerenciada externamente.
   */
  generateRecord?: boolean;
  /**
   * Identificador do processo
   */
  processId: number;
  /**
   * Versão do processo
   */
  processVersion?: number;
  /**
   * Json com variáveis de negócio do processo. Ex: { "businessData": { "campo1": "valor1", "campo2": 2 }}
   */
  businessData: string;
  /**
   * Informação para Fluxo de Execução do processo
   */
  flowExecutionData: FlowExecutionData;
  /**
   * String de autorização das tarefas do workflow
   */
  authorization?: string;
  /**
   * Título da solicitação
   */
  title?: string;
  /**
   * Usuário solicitante
   */
  requester?: string;
  /**
   * Se existir um serviço externo antes da primeira etapa, o mesmo deve 
   * sobrescrever as variáveis enviadas no businessData
   */
  externalServiceOverrideBusinessData?: boolean;
}

/**
 * Objeto de retorno da action startProcess.
 */
export interface StartProcessOut {
  /**
   * Identificador da instância de processo criada
   */
  processInstanceID: number;
}
