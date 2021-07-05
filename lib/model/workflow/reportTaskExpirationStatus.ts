/**
 * Situação atual da solicitação.
 */
export enum ReportTaskExpirationStatus {
  /**
   * Em progresso
   */
  InProgress = 'InProgress',
  /**
   * Irá expirar
   */
  WillExpire = 'WillExpire',
  /**
   * Expirado
   */
  Expired = 'Expired'
}
