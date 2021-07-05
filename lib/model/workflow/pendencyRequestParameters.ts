import { PendencyType } from './pendencyType';
import { ProcessFilterType } from './processFilterType';

/**
 * Representa um objeto usado de parâmetro de entrada de alguns serviços.
 */
export interface PendencyRequestParameters { 
    /**
     * Índice inicial da consulta
     */
    start?: number;
    /**
     * Quantidade de itens da consulta
     */
    limit?: number;
    /**
     * Tipo da pendência
     */
    type?: PendencyType;
    /**
     * Filtro para buscar pelo nome da pendencia ou valor das variáveis do processo
     */
    filterValue?: string;
    /**
     * Filtro do tipo de processo (integrado ou não)
     */
    processFilterType?: ProcessFilterType;
}
