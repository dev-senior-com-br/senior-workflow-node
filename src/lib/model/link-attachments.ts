export interface LinkAttachmentsIn {
  /**
  * Identificadores de anexo
  */
  ids: string[]
  /**
  * Identificador da instância de processo a qual o arquivo pertence.
  */
  processInstance: number
}

export type LinkAttachmentsOut = Record<string, unknown>;