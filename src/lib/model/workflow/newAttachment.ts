/**
 * Objeto de entrada da action newAttachment.
 */
export interface NewAttachmentIn {
  /**
  * Nome do arquivo a ser anexado
  */
  name: string
  /**
  * Tamanho do arquivo a ser anexado
  */
  size?: number
}

/**
 * Objeto de retorno da action newAttachment.
 */
export interface NewAttachmentOut {
  /**
  * Anexo
  */
  attachment: {
    /**
    * Identificador do anexo
    */
    id: string
    /**
    * Nome do arquivo anexado
    */
    name: string
    /**
    * Tamanho do arquivo anexado
    */
    size: number
    /**
    * Data do envio (Formato ISO_DATE_TIME: "2016-03-29T12:56:57.155Z")
    */
    uploadDate: Date
    /**
    * Responsável pelo anexo
    */
    addedBy : string
  }
  /**
  * URL na qual o upload do arquivo poderá ser realizado
  */
  uploadUrl : string
}
