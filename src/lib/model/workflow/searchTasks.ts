import { MyRequestKind } from './myRequestKind';
import { OrderDirection } from './orderDirection';
import { OrderField } from './orderField';
import { PendencyResponseStatus } from './pendencyResponseStatus';
import { TaskStatus } from './taskStatus';

/**
 * Objeto de entrada da query searchTasks.
 */
export interface SearchTasksIn {
  /**
   * Filtros para pesquisa
   */
  filter?: {
    /**
     * Filtrar pelo solicitante
     */
    requesters?: string[];
    /**
     * Filtrar pelo identificador da solicitação
     */
    requests?: string[];
    /**
     * Filtrar pelo identificador do processo
     */
    processes?: string[];
    /**
     * Filtrar pelo status
     */
    statuses?: string[];
  };
  /**
   * Paginação
   */
  pagination?: {
    /**
     * Índice inicial da consulta
     */
    start?: number;
    /**
     * Quantidade de itens da consulta
     */
    limit?: number;
  };
  /**
   * Ordenação
   */
  orders?: [
    {
      /**
       * Campo a ser ordenado
       */
      field: OrderField;
      /**
       * Direção da ordenação
       */
      direction: OrderDirection;
    }
  ];
}

/**
 * Objeto de retorno da query searchTasks.
 */
export interface SearchTasksOut {
  /**
   * Lista de tarefas
   */
  tasks: [
    {
      /**
       * Identificador do processo
       */
      processId: number;
      /**
       * Nome do processo
       */
      processName?: string;
      /**
       * Identificador da instância do processo
       */
      processInstanceId: number;
      /**
       * Atividade
       */
      activity: string;
      /**
       * Detalhes do processo
       */
      detail?: string;
      /**
       * Data de início da tarefa/processo
       */
      startDate: Date;
      /**
       * Data de fim da tarefa/processo
       */
      endDate?: Date;
      /**
       * Data de expiração da tarefa/processo
       */
      expirationDate?: Date;
      /**
       * Nome do responsável pela tarefa
       */
      responsableName?: string;
      /**
       * Nome e sobrenome do responsável pela tarefa
       */
      responsableFullName?: string;
      /**
       * Nome do solicitante
       */
      requesterName: string;
      /**
       * Status da tarefa
       */
      taskStatus?: TaskStatus;
      /**
       * Status da solicitação
       */
      requestStatus?: MyRequestKind;
      /**
       * Título da solicitação
       */
      title?: string;
      /**
       * Identificador da atividade
       */
      activityId: number;
      /**
       * Identificador da etapa
       */
      step: number;
      /**
       * Número de pendências de uma solicitação
       */
      pendencyCount: number;
      /**
       * Status da pendência
       */
      responseStatus: PendencyResponseStatus;
    }
  ];
  /**
   * Total de registros
   */
  total: number;
}
