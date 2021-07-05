/**
 * Ranking de processos mais usados pelo usuário.
 */
export interface ProcessRanking { 
  /**
   * Identificador do processo
   */
  processId: number;
  /**
   * Versão atual do processo
   */
  currentVersion: number;
  /**
   * Nome do processo
   */
  processName: string;
  /**
   * Tag agrupador de processos
   */
  tag?: string;
  /**
   * Ícone do processo
   */
  icon?: string;
  /**
   * Descrição do processo
   */
  description?: string;
  /**
   * Número de solicitações
   */
  requests: number;
}
