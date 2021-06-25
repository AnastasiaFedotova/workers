import { Action } from '@ngrx/store';

export enum ERemovedWorkerActions {
  RemoveWorker = '[Workers] Remove worker',
  RemoveWorkerSuccess = '[Workers] Remove Success worker'
}

export class RemoveWorker implements Action {
  public readonly type = ERemovedWorkerActions.RemoveWorker
  constructor(public id: string) { }
}

export class RemoveWorkerSuccess implements Action {
  public readonly type = ERemovedWorkerActions.RemoveWorkerSuccess;
  constructor(public payload: boolean) { }
}

export type RemovedWorkerActions = RemoveWorker | RemoveWorkerSuccess;
