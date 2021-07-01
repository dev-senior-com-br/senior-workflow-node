/**
 * Situação atual da solicitação.
 */
export enum ReportTaskExpirationStatus {
  /**
   * Em progresso
   */
  InProgress,
  /**
   * Irá expirar
   */
  WillExpire,
  /**
   * Expirado
   */
  Expired
}
