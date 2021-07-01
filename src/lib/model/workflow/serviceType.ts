/**
 * Representa qual tipo de retorno o serviço terá.
 */
export enum ServiceType {
  /**
   * Processos que o usuário pode abrir solicitação
   */
  UserGrantedProcesses,
  /**
   * Processos que o usuário pode coordernar
   */
  UserGrantedCordinateProcesses,
  /**
   * Processos que o usuários pode editar
   */
  AllProcesses,
  /**
   * Processos que o usuário pode editar ou visualizar
   */
  UserGrantedOrEditProcesses
}
