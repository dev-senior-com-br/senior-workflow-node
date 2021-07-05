import { ServiceFlowToken } from './serviceFlowToken';

/**
 * Resumo das solicitações com integração terceira.
 */
export interface ThirdpartyRequestResume { 
  /**
   * Identificador da pendência
   */
  flowToken: ServiceFlowToken;
  /**
   * Identificador da aplicação terceira
   */
  thirdpartyId?: string;
  /**
   * Dados das variáveis do processo
   */
  processData: string;
}
