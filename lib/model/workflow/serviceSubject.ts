import { SubjectKind } from './subjectKind';

/**
 * Representa diferentes tipos de usuário.
 */
export interface ServiceSubject { 
  /**
   * Código do usuário
   */
  userCode: number;
  /**
   * Nome do usuário
   */
  name: string;
  /**
   * Tipo do usuário
   */
  subjectKind: SubjectKind;
}
