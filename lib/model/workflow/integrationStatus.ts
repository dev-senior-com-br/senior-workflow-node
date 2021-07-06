/**
 * Estado do upload do documento.
 */
export enum IntegrationStatus {
  /**
   * Upload em andamento
   */
  IN_PROGRESS = 'IN_PROGRESS',
  /**
   * Upload finalizado com sucesso
   */
  SUCCESS = 'SUCCESS',
  /**
   * Upload finalizado com erro
   */
  ERROR = 'ERROR'
}
