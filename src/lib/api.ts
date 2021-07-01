import { SeniorApi } from '@seniorsistemas/senior-core';
import Workflow from './resources/workflow';

export class PlatformAppsApi extends SeniorApi {
  #workflow!: Workflow;

  get workflow(): Workflow {
    this.#workflow = this.#workflow || new Workflow(this);
    return this.#workflow;
  }
}
