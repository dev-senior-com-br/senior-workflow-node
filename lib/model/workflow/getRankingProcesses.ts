import { ProcessRanking } from './processRanking';

/**
 * Objeto de entrada da query getRankingProcesses.
 */
export interface GetRankingProcessesIn {
  /**
   * Data inicial para processar o ranking. Se não informada usa data atual menos 6 meses
   * (Formato ISO_DATE_TIME: "2016-03-29T12:56:57.155Z")
   */
  start?: Date;
  /**
  * Data final para processar o ranking. Se não informada usa data atual 
  * (Formato ISO_DATE_TIME: "2016-03-29T12:56:57.155Z")
  */
  end?: Date;
  /**
  * Número de processos que serão retornados. Valor padrão é 3
  */
  limit?: number;
}

/**
 * Objeto de retorno da query getRankingProcesses.
 */
export interface GetRankingProcessesOut {
  /**
   * Lista de processos
   */
  processes: Array<ProcessRanking>;
}
