/**
 * Representação de uma ação de um processo ou etapa do processo.
 */
export interface ProcessAction { 
  name: string;
  label: string;
  finish: boolean;
  connectsWithAutomaticGateway: boolean;
  isAppUser: boolean;
}
