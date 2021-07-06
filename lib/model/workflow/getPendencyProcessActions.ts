import { ProcessAction } from './processAction';
import { ServiceFlowToken } from './serviceFlowToken';

/**
 * Objeto de entrada da query getPendencyProcessActions.
 */
export interface GetPendencyProcessActionsIn {
  /**
   * Token com informações da etapa do fluxo
   */
  serviceFlowToken: ServiceFlowToken;
}

/**
 * Objeto de retorno da query getPendencyProcessActions.
 */
export interface GetPendencyProcessActionsOut {
  /**
   * Lista de ações da pendência disponíveis para execução
   */
  pendencyProcessAction: Array<ProcessAction>;
}
