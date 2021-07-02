/**
 * Tipo de entrada no histórico de uma solicitação.
 */
export enum RequestHistoryType {
  /**
   * Solicitação iniciada
   */
  STARTED = 'STARTED',
  /**
   * Inclusão de comentário
   */
  COMMENT = 'COMMENT',
  /**
   * Anexo incluído
   */
  ATTACHMENT_ADDED = 'ATTACHMENT_ADDED',
  /**
   * Anexo removido
   */
  ATTACHMENT_REMOVED = 'ATTACHMENT_REMOVED',
  /**
   * Gestor do processo alterou o responsável
   */
  CHANGE_RESPONSIBLE = 'CHANGE_RESPONSIBLE',
  /**
   * Solicitação cancelada
   */
  CANCEL_PENDENCY = 'CANCEL_PENDENCY',
  /**
   * Pendência da solicitação respondida
   */
  RESPONSE_PENDENCY = 'RESPONSE_PENDENCY',
  /**
   * Solicitação encerrada
   */
  FINISHED = 'FINISHED'
}
