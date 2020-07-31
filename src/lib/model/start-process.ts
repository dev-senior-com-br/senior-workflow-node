export interface StartProcessIn {
  /**
   * Quando o usuário quer definir o número da instância do processo.
   */
  processInstanceID: number;
  /**
   * Número do processo
   */
  processId: number;
  /**
   * Versão do Processo
   */
  processVersion: number;
  /**
   * Variáveis de Negócio do Processo
   */
  businessData: string;
  /**
   * Informação para Fluxo de Execução do Processo
   */
  flowExecutionData: {
    /**
     * Ação a ser executada
     */
    actionToExecute: string;
    /**
     * Nome do proximo usuário ou grupo
     */
    nextSubject: string;
  };
  /**
   * String de autorização executados da tarefas do workflow
   */
  authorization: string;
  /**
   * Título opcional da solicitação
   */
  title: string;
  /**
   * Usuário solicitante
   */
  requester: string;
}

export interface StartProcessOut {
  /**
  * Instancia de Processo criada
  */ 	
  processInstanceID: number;
} 