/**
 * Objeto de entrada da action cancelProcessInstance.
 */
export interface CancelProcessInstanceIn {
  /**
   * Identificadores das instâncias de processo a serem canceladas.
   */
  ids: Array<number>;
  /**
  * Usuário responsável pelo cancelamento. Deve ser informado quando for 
  * uma aplicação, quando não for aplicação esse campo é ignorado
  */
  user?: string;
  /**
  * Motivo do cancelamento.
  */
  reason: string;
}
