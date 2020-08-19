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
    uploadDate: string
    /**
    * Responsável pelo anexo
    */
    addedBy : string
  }
  /**
  * URL para o anexo
  */
  uploadUrl : string
}