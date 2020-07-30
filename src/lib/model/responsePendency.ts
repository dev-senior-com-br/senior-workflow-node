export interface ResponsePendencyIn {
  /**
   * Token do Processo
   */
  serviceFlowToken: {
    /**
     * Identificador da Instância do Proceso
     */
    processInstanceID: number;
    /**
     * Identificador da Etapa do Processo
     */
    step: number;
    /**
     * Identificador da Atividade
     */
    activityId: number;
  };
  /**
   * Variáveis de Negócio do Processo
   */
  responseData: {
    /**
     * Dados de Negócio do Processo
     */
    businessData: string;
    /**
     * Informação para Fluxo de Execução do Processo
     */
    flowExecutionData: {
      /**
       * Nome da ação a ser tomada dentro do fluxo
       */
      actionToExecute: string;
      /**
       * Usuário que pode receber a próxima ação
       */
      nextSubject: string;
    };
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

export type ResponsePendencyOut = Record<string, unknown>;