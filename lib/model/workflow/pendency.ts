import { PendencyType } from './pendencyType';
import { ProcessInstance } from './processInstance';
import { ServiceFlowToken } from './serviceFlowToken';
import { ServiceSubject } from './serviceSubject';

/**
 * Representa uma pendência de um processo.
 */
export interface Pendency { 
    serviceFlowToken: ServiceFlowToken;
    description: string;
    hint: string;
    currentSubject: ServiceSubject;
    delegatorSubject: ServiceSubject;
    startDate: Date;
    lastUpdateDate: Date;
    expirationDate: Date;
    performerId: string;
    processInstance: ProcessInstance;
    type: PendencyType;
    pool: boolean;
    title?: string;
}
