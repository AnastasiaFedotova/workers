import { WorkerInterface } from 'src/app/interface/worker';

export interface AddedWorkerState {
  worker: WorkerInterface | null
}

export const InitialAddedWorkerState: AddedWorkerState = {
  worker: null
}
