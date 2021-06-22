import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { WorkerService } from 'src/app/services/worker.service';
import { EAddedWorkerActions, AddWorker } from '../actions/addedWorker.actions';

@Injectable({ providedIn: "root" })
export class AddedWorkerEffect {
  constructor(private actions$: Actions, private workersService: WorkerService) { }

  addWorker$ = createEffect(() => this.actions$.pipe(
    ofType<AddWorker>(EAddedWorkerActions.AddWorker),
    mergeMap((_action) => this.workersService.addWorker()
      .pipe(
        map(worker => ({ type: EAddedWorkerActions.AddWorkerSuccess, payload: worker }))
      )),
    catchError(err => {
      return throwError(err);
    })
  )
  );
}
