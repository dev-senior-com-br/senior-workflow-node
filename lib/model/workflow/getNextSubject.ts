import { ServiceFlowToken } from './serviceFlowToken';
import { ServiceSubject } from './serviceSubject';

/**
 * Objeto de entrada da query getNextSubject.
 */
export interface GetNextSubjectIn {
  /**
   * Token com informações da etapa do fluxo em andamento
   */
  serviceFlowToken: ServiceFlowToken;
  /**
   * Nome da sequência do Processo Modelador
   */
  sequenceName: string;
  /**
   * Token de autenticação da G7
   */
  authorization?: string;
}

/**
 * Objeto de retorno da query getNextSubject.
 */
export interface GetNextSubjectOut {
  /**
   * Sujeitos que podem receber a atribuição
   */
  subjects: Array<ServiceSubject>;
  /**
   * Depende da execução do próxima etapa para identificar a atribuição
   */
  dependsOnNextStep: boolean;
}
