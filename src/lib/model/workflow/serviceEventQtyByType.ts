import { IntegrationStatus } from './integrationStatus';

/**
 * Quantidade de eventos de serviços externos por tipos.
 */
export interface ServiceEventQtyByType { 
    /**
     * Tipo do evento
     */
    type: IntegrationStatus;
    /**
     * Quantidade de eventos
     */
    quantity: number;
}
