import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './../state/app.state';
import { addedWorkerReducer } from './addedWorker.reducers';
import { workersListReducer } from './workersList.reducers';
import { removedWorkerReducer } from './removedWorker.reducers';


export const AppReducer: ActionReducerMap<AppState, any> = {
  worker: addedWorkerReducer,
  workers: workersListReducer,
  isRemoved: removedWorkerReducer
}
