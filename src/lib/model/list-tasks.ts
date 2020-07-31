export interface ListTasksIn {
  /**
   * Tipo de item da central de tarefas
   */
  kind: string;
  /**
   * Agrupado por
   */
  groupBy: string;
  /**
   * Filtros
   */
  filters?: [
    {
      /**
       * Campo a ser filtrado
       */
      type: string;
      /**
       * Valor como string
       */
      stringValue?: string;
      /**
       * Valor como data (Formato ISO_DATE_TIME: "2016-03-29T12:56:57.155Z")
       */
      dateValue?: string;
      /**
       * Valor do filtro por campo
       */
      field: {
        /**
         * Nome do campo
         */
        name: string;
        /**
         * Operador de comparação
         */
        operator: string;
        /**
         * Valor
         */
        value: string;
      };
    }
  ];
  /**
   * Ordenação
   */
  orders?: [
    {
      /**
       * Campo a ser ordenado
       */
      field: string;
      /**
       * direção da ordenação (desc, asc)
       */
      direction?: string;
    }
  ];
  /**
   * Início
   */
  start: number;
  /**
   * Quantidade
   */
  limit: number;
  /**
   * Faixa inicial da consulta de tarefas
   */
  startTask: number;
  /**
   * Quantidade de tarefas da consulta
   */
  limitTask: number;
  /**
   * Filtrar por grupo
   */
  group?: string;
}

export interface ListTasksOut {
  /**
   * Agrupamentos
   */
  groups: [
    {
      /**
       * Nome do agrupamento
       */
      name: string;
      /**
       * Lista de tarefas/solicitações do agrupamento
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
          processName: string;
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
          detail: string;
          /**
           * Data de início da tarefa/processo (Formato ISO_DATE_TIME: "2016-03-29T12:56:57.155Z")
           */
          startDate: string;
          /**
           * Data de fim da tarefa/processo (Formato ISO_DATE_TIME: "2016-03-29T12:56:57.155Z")
           */
          endDate: string;
          /**
           * Data de expiração da tarefa/processo (Formato ISO_DATE_TIME: "2016-03-29T12:56:57.155Z")
           */
          expirationDate: string;
          /**
           * Nome do responsável pela tarefa
           */
          responsableName: string;
          /**
           * Nome do solicitante
           */
          requesterName: string;
          /**
           * Status da tarefa
           */
          taskStatus: string;
          /**
           * Status da solicitação
           */
          requestStatus: string;
          /**
           * Título da Solicitação
           */
          title: string;
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
           * Estado da pendência em lote
           */
          responseStatus: string;
        }
      ];
      /**
       * Total de ítens
       */
      total: number;
    }
  ];
  /**
   * Total de itens
   */
  count: number;
}
