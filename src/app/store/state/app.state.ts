import { RouterReducerState } from '@ngrx/router-store';
import { AddedWorkerState, InitialAddedWorkerState } from './addedWorker.state';
import { WorkersListState, InitialWorkersListState } from './workersList.state';

export interface AppState {
  worker: AddedWorkerState,
  workers: WorkersListState
}

export const InitialAppState: AppState = {
  worker: InitialAddedWorkerState,
  workers: InitialWorkersListState
}

export function getInitialState(): AppState {
  return InitialAppState
}
