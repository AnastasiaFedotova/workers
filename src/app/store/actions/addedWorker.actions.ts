import { Action } from '@ngrx/store';
import { WorkerInterface } from 'src/app/interface/worker';

export enum EAddedWorkerActions {
  AddWorker = '[Comment] add worker',
  AddWorkerSuccess = '[Comment] add success worker'
}

export class AddWorker implements Action {
  public readonly type = EAddedWorkerActions.AddWorker;
  constructor() { }
}

export class AddWorkerSuccess implements Action {
  public readonly type = EAddedWorkerActions.AddWorkerSuccess;
  constructor(public payload: WorkerInterface) { }
}

export type AddedWorkerActions = AddWorker | AddWorkerSuccess;
