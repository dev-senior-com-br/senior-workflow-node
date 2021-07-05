import { SeniorApi } from '@seniorsistemas/senior-core';
import Workflow from './resources/workflow';

/**
 * Responsável por fornecer acesso a todas as APIs de aplicativos disponibilizadas. 
 */
export class PlatformAppsApi extends SeniorApi {
  #workflow!: Workflow;

  /**
   * Retorna o service responsável pela comunicação com o serviço de Workflow
   */
  get workflow(): Workflow {
    this.#workflow = this.#workflow || new Workflow(this);
    return this.#workflow;
  }
}
