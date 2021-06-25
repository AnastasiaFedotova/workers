import { RouterReducerState } from '@ngrx/router-store';
import { AddedWorkerState, InitialAddedWorkerState } from './addedWorker.state';
import { RemovedWorkerState, InitialRemovedWorkerState } from './removedWorker.state';
import { WorkersListState, InitialWorkersListState } from './workersList.state';

export interface AppState {
  worker: AddedWorkerState,
  workers: WorkersListState,
  isRemoved: RemovedWorkerState
}

export const InitialAppState: AppState = {
  worker: InitialAddedWorkerState,
  workers: InitialWorkersListState,
  isRemoved: InitialRemovedWorkerState
}

export function getInitialState(): AppState {
  return InitialAppState
}
