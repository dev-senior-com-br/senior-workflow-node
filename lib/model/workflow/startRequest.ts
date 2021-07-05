/**
 * Objeto de entrada da action startRequest.
 */
export interface StartRequestIn {
  /**
   * Identificador do processo
   */
  processId: number;
  /**
   * Objeto com as variáveis de negócio do processo. Ex: businessData: { campo1: "valor1", campo2: 2 }
   */
  businessData: Record<string, unknown>;
  /**
   * Nome da ação a ser tomada dentro do fluxo. Obrigatório caso possua mais de uma ação possível
   */
  actionToExecute?: string;
  /**
   * Responsável que vai receber a próxima ação, obrigatório caso o mecanismo de atribuição 
   * retorne mais de um responsável
   */
  nextSubject?: string;
  /**
   * Token de autorização para integração com Serviços Externos, caso necessário
   */
  externalServiceAuthorization?: string;
  /**
   * Título opcional da solicitação
   */
  title?: string;
  /**
   * Usuário solicitante, caso a solicitação esteja sendo feita em nome de outro usuário
   */
  requester?: string;
}

/**
 * Objeto de retorno da action startRequest.
 */
export interface StartRequestOut {
  /**
  * Identificador da instância de processo criada
  */ 	
  processInstanceID: number;
} 
