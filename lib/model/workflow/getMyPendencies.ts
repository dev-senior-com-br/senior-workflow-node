import { Pendency } from './pendency';
import { PendencyRequestParameters } from './pendencyRequestParameters';

/**
 * Objeto de entrada da query getMyPendencies.
 */
export interface GetMyPendenciesIn {
  /**
   * Parâmetros de filtro para a consulta
   */
  pendencyRequestParameters?: PendencyRequestParameters;
}

/**
 * Objeto de retorno da query getMyPendencies.
 */
export interface GetMyPendenciesOut {
  /**
   * Lista de pendências
   */
  pendencies: Array<Pendency>;
  /**
   * Total de registros
   */
  total: number;
}
