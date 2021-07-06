import { ProcessAccessLevel } from './processAccessLevel';
import { ProcessPublicationStatus } from './processPublicationStatus';
import { ServiceEventQtyByType } from './serviceEventQtyByType';

/**
 * Representa um processo de workflow.
 */
export interface ServiceProcess { 
    /**
     * Identificador do processo
     */
    processId: number;
    /**
     * Versão atual do processo
     */
    currentVersion: number;
    /**
     * Versão publicada do processo
     */
    publishedVersion: number;
    /**
     * Nome do processo
     */
    processName: string;
    /**
     * Nome do processo assim como se encontra no banco de dados
     */
    processRawName: string;
    /**
     * Se o processo está modificado
     */
    changed: boolean;
    /**
     * Nome do arquivo do processo
     */
    fileName: string;
    /**
     * Se o processo está publicado ou apenas salvo
     */
    status: ProcessPublicationStatus;
    /**
     * Descrição do processo
     */
    description: string;
    /**
     * Data de criação do processo
     */
    creationDate: Date;
    /**
     * Se o processo está ativo
     */
    active?: boolean;
    /**
     * Se o processo é integrado
     */
    embedded?: boolean;
    /**
     * Se o prcesso é simples
     */
    simple?: boolean;
    /**
     * Tag agrupadora de processos
     */
    tag?: string;
    /**
     * Indica o nível de acesso do usuário ao processo
     */
    accessLevel?: ProcessAccessLevel;
    /**
     * Ícone do processo
     */
    icon?: string;
    /**
     * Listagem dos tipos e quantidade de eventos de serviço externo
     */
    serviceEventQtyByType?: Array<ServiceEventQtyByType>;
}
