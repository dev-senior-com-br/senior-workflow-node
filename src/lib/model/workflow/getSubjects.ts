import { ServiceSubject } from './serviceSubject';
import { SubjectKind } from './subjectKind';

/**
 * Objeto de entrada da query getSubjects.
 */
export interface GetSubjectsIn {
  /**
   * Página a ser consultada
   */
  page?: number;
  /**
  * Quantidade de itens na página
  */
  pageSize?: number;
  /**
  * Filtro pelo nome
  */
  nameFilter?: string;
  /**
  * Filtro por tipo
  */
  type: SubjectKind;
  /**
  * Incluir usuários removidos
  */
  includeRemoved?: boolean;
}

/**
 * Objeto de retorno da query getSubjects.
 */
export interface GetSubjectsOut {
  /**
   * Lista de responsáveis
   */
  subjects: Array<ServiceSubject>;
  /**
  * Total de itens
  */
  totalElements: number;
  /**
  * Total de páginas
  */
  totalPages: number;
}
