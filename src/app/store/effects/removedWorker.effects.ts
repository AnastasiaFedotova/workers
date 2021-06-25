import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { WorkerService } from 'src/app/services/worker.service';
import { ERemovedWorkerActions, RemoveWorker } from '../actions/removedWorker.actions';

@Injectable({ providedIn: "root" })
export class RemovedWorkerEffect {
  constructor(private actions$: Actions, private workersService: WorkerService) { }

  removeWorker$ = createEffect(() => this.actions$.pipe(
    ofType<RemoveWorker>(ERemovedWorkerActions.RemoveWorker),
    mergeMap((action) => this.workersService.removeWorker(action.id)
      .pipe(
        map(res => ({ type: ERemovedWorkerActions.RemoveWorkerSuccess, payload: res }))
      )),
    catchError(err => {
      return throwError(err);
    })
  )
  );
}
