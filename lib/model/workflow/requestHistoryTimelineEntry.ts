import { RequestHistoryType } from './requestHistoryType';

/**
 * Linha do tempo com o registro de ações e observações de uma solicitação.
 */
export interface RequestHistoryTimelineEntry { 
  /**
   * Identificador da instância do proceso
   */
  processInstanceId: number;
  /**
   * Tipo de entrada histórica
   */
  historyType: RequestHistoryType;
  /**
   * Data do histórico (Formato ISO_DATE_TIME: "2016-03-29T12:56:57.155Z")
   */
  historyDate: Date;
  /**
   * Usuário responsável
   */
  userName: string;
  /**
   * Ação executada em nome do usuário
   */
  impersonatedUserName?: string;
  /**
   * Nome da tarefa
   */
  taskName?: string;
  /**
   * Nome da ação executada
   */
  actionName?: string;
  /**
   * Endereço IP do usuário
   */
  userIpAddress?: string;
  /**
   * Comentário realizado na etapa do processo
   */
  comment?: string;
  /**
   * Anexo
   */
  attachmentName?: string;
  /**
   * Responsável anterior
   */
  oldResponsible: string;
  /**
   * Novo responsável
   */
  newResponsible: string;
  /**
   * Razão do cancelamento
   */
  cancelReason?: string;
}
