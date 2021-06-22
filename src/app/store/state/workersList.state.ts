import { WorkerInterface } from 'src/app/interface/worker';

export interface WorkersListState {
  workers: WorkerInterface[],
}

export const InitialWorkersListState: WorkersListState = {
  workers: [],
}
