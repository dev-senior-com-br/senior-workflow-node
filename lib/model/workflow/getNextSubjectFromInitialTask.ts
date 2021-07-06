import { KeyValueRecord } from './keyValueRecord';
import { ServiceSubject } from './serviceSubject';

/**
 * Objeto de entrada da query getNextSubjectFromInitialTask.
 */
export interface GetNextSubjectFromInitialTaskIn {
  /**
   * Identificador do processo
   */
  processId: number;
  /**
   * Versão do processo
   */
  processVersion: number;
  /**
   * Nome da sequência do Processo Modelador
   */
  sequenceName: string;
  /**
   * Parâmetros para Mecanismo Customizado
   */
  customParams?: Array<KeyValueRecord>;
  /**
   * Token de autenticação da G7
   */
  authorization?: string;
}

/**
 * Objeto de retorno da query getNextSubjectFromInitialTask.
 */
export interface GetNextSubjectFromInitialTaskOut {
  /**
   * Sujeitos que podem receber a atribuição
   */
  subjects: Array<ServiceSubject>;
  /**
   * Depende da execução da próxima etapa para identificar a atribuição
   */
  dependsOnNextStep: boolean;
}
