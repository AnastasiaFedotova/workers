import { Action } from '@ngrx/store';
import { WorkerInterface } from 'src/app/interface/worker';

export enum EWorkersListActions {
  GetWorkers = '[Workers] Get workers',
  GetWorkersSuccess = '[Workers] Get Success workers'
}

export class GetWorkers implements Action {
  public readonly type = EWorkersListActions.GetWorkers
  constructor() { }
}

export class GetWorkersSuccess implements Action {
  public readonly type = EWorkersListActions.GetWorkersSuccess;
  constructor(public payload: WorkerInterface[]) { }
}

export type WorkersListActions = GetWorkers | GetWorkersSuccess;
