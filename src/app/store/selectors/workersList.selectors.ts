import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { WorkersListState } from '../state/workersList.state';

const selectWorkers = (state: AppState) => state.workers;

export const selectedWorkersList = createSelector(
  selectWorkers,
  (state: WorkersListState) => state.workers
)
