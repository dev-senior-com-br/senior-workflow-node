/**
 * Tipo de ordenação.
 */
export enum OrderField {
  /**
   * Por solicitante
   */
  REQUESTER = 'REQUESTER',
  /**
   * Por responsável
   */
  RESPONSIBLE = 'RESPONSIBLE',
  /**
   * Por status
   */
  STATUS = 'STATUS',
  /**
   * Por data inicial
   */
  START_DATE = 'START_DATE',
  /**
   * Por data final
   */
  END_DATE = 'END_DATE',
  /**
   * Por data de expiração
   */
  EXPIRATION_DATE = 'EXPIRATION_DATE',
  /**
   * Por nome do processo
   */
  PROCESS_NAME = 'PROCESS_NAME'
}
