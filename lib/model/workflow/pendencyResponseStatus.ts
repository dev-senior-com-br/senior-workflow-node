/**
 * Estado da pendência.
 */
export enum PendencyResponseStatus {
  /**
   * Aguardando
   */
  WAITING = 'WAITING',
  /**
   * Executando
   */
  EXECUTING = 'EXECUTING',
  /**
   * Erro
   */
  ERROR = 'ERROR'
}
