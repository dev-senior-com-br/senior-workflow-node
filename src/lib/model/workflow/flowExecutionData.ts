/**
 * Dados para a execução do fluxo.
 */
export interface FlowExecutionData { 
    /**
     * Nome da ação a ser tomada dentro do fluxo
     */
    actionToExecute: string;
    /**
     * Usuário que pode receber a próxima ação
     */
    nextSubject?: string;
}
