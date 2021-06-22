import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { WorkerService } from 'src/app/services/worker.service';
import { EWorkersListActions, GetWorkers } from '../actions/workerList.actions';

@Injectable({ providedIn: "root" })
export class WorkersListEffect {
  constructor(private actions$: Actions, private workerService: WorkerService) { }

  getWorkers$ = createEffect(() => this.actions$.pipe(
    ofType<GetWorkers>(EWorkersListActions.GetWorkers),
    mergeMap((_action) => this.workerService.getAllWorkers()
      .pipe(
        map(workers => ({ type: EWorkersListActions.GetWorkersSuccess, payload: workers }))
      )),
    catchError(err => {
      return throwError(err);
    })
  )
  );
}
