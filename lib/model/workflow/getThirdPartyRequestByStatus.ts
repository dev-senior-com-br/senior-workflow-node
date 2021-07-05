import { PendencyType } from './pendencyType';
import { ThirdpartyRequestResume } from './thirdpartyRequestResume';

/**
 * Objeto de entrada da query getThirdPartyRequestByStatus.
 */
export interface GetThirdPartyRequestByStatusIn {
  /**
   * Nome da chave do processo
   */
  processKey: string;
  /**
  * Status da pendência
  */
  status: PendencyType;
}

/**
 * Objeto de retorno da query getThirdPartyRequestByStatus.
 */
export interface GetThirdPartyRequestByStatusOut {
  /**
   * Solicitações terceiras
   */
  requests: Array<ThirdpartyRequestResume>;
}
