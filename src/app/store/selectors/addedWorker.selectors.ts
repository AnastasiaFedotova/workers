import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { AddedWorkerState } from '../state/addedWorker.state';

const selectWorker = (state: AppState) => state.worker;

export const selectedAddedWorker = createSelector(
  selectWorker,
  (state: AddedWorkerState) => state.worker
)
