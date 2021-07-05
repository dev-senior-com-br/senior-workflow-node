import { ServiceFlowToken } from './serviceFlowToken';
import { ServiceSubject } from './serviceSubject';

/**
 * Objeto de entrada da action changePendencyUser.
 */
export interface ChangePendencyUserIn {
  /**
   * Lista dos identificadores das tarefas
   */
  serviceFlowTokens: Array<ServiceFlowToken>;
  /**
   * Usuário, grupo ou papel responsável
   */
  subject: ServiceSubject;
}
