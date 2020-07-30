import { SeniorApi } from '@seniorsistemas/senior-core';
import BPM from './resources/bpm';

export class PlatformAppsApi extends SeniorApi {
  #bpm!: BPM;

  get bpm(): BPM {
    this.#bpm = this.#bpm || new BPM(this);
    return this.#bpm;
  }
}
