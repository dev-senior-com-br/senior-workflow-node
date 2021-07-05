/**
 * Objeto de entrada da action linkAttachments.
 */
export interface LinkAttachmentsIn {
  /**
  * Identificadores de anexos
  */
  ids: string[]
  /**
  * Identificador da instância de processo ao qual o arquivo pertence
  */
  processInstance: number
}
