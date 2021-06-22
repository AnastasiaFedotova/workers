import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { WorkerInterface } from './../../interface/worker';
import { AddWorker } from './../../store/actions/addedWorker.actions'
import { GetWorkers } from './../../store/actions/workerList.actions'
import { selectedWorkersList } from './../../store/selectors/workersList.selectors';

@Component({
  selector: 'app-workers-container',
  templateUrl: './workers-container.component.html',
  styleUrls: ['./workers-container.component.scss']
})
export class WorkersContainerComponent implements OnInit {
  workers: WorkerInterface[] = [];
  constructor(private store: Store<AppState>) {
    this.store.dispatch(new GetWorkers());
  }

  ngOnInit(): void {
    this.store.pipe(select(selectedWorkersList)).subscribe(val => {
      this.workers = val;
    })
  }

  addWorker() {
    this.store.dispatch(new AddWorker());
  }
}
