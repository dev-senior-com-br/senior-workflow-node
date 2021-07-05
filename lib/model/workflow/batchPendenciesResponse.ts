import { FlowToken } from './flowToken';

/**
 * Objeto de entrada da action batchPendenciesResponse.
 */
export interface BatchPendenciesResponseIn {
  /**
   * Tokens das pendências
   */
  flowTokens: Array<FlowToken>;
  /**
   * Ação a ser executada
   */
  actionToExecute?: string;
  /**
   * Token de autenticação
   */
  authorization: string;
}
