import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { RemovedWorkerState } from '../state/removedWorker.state';

const selectRemovedWorker = (state: AppState) => state.isRemoved;

export const selectedRemovedWorker = createSelector(
  selectRemovedWorker,
  (state: RemovedWorkerState) => state.isRemoved
)
