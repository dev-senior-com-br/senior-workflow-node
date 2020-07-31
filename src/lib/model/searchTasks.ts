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
     * Faixa inicial da consulta
     */
    start?: number;
    /**
     * Quantidade de linhas da consulta
     */
    limit?: number;
  };
  /**
   * Ordenação
   */
  orders?: [
    {
      /**
       * Campo a ser ordenado por REQUESTER, RESPONSIBLE, STATUS, START_DATE, END_DATE, EXPIRATION_DATE e PROCESS_NAME
       */
      field: string;
      /**
       * Direção da ordenação ASC ou DESC
       */
      direction: string;
    }
  ];
}

export interface SearchTasksOut {
  /**
   * Lista de tarefas
   */
  tasks: [
    {
      /**
       * Id do processo
       */
      processId: number;
      /**
       * Nome do processo
       */
      processName?: string;
      /**
       * Id da instância do processo
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
       * Data de início da tarefa/processo (Formato ISO_DATE_TIME: '2016-03-29T12:56:57.155Z')
       */
      startDate?: string;
      /**
       * Data de fim da tarefa/processo (Formato ISO_DATE_TIME: '2016-03-29T12:56:57.155Z')
       */
      endDate?: string;
      /**
       * Data de expiração da tarefa/processo (Formato ISO_DATE_TIME: '2016-03-29T12:56:57.155Z')
       */
      expirationDate?: string;
      /**
       * Nome do responsável pela tarefa
       */
      responsableName?: string;
      /**
       * Nome do solicitante
       */
      requesterName: string;
      /**
       * Status da tarefa UNREADED, READED, PENDING ou TREATED
       */
      taskStatus?: string;
      /**
       * Status da solicitação InProgress, Completed ou Canceled
       */
      requestStatus?: string;
      /**
       * Título da Solicitação
       */
      title?: string;
      /**
       * Id da atividade
       */
      activityId: number;
      /**
       * Passo
       */
      step: number;
      /**
       * Número de pendências de uma solicitação
       */
      pendencyCount: number;
      /**
       * Estado da pendência em lote WAITING, EXECUTING ou ERROR
       */
      responseStatus: string;
    }
  ];
  /**
   * Total de registros
   */
  total: number;
}
