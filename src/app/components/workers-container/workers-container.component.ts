import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SocketService } from 'src/app/services/socket.service';
import { selectedAddedWorker } from 'src/app/store/selectors/addedWorker.selectors';
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
  constructor(private store: Store<AppState>, private socketService: SocketService) {
    this.store.dispatch(new GetWorkers());
  }

  ngOnInit(): void {
    this.store.pipe(select(selectedWorkersList)).subscribe(val => {
      this.workers = val;
    });

    this.socketService.killWorker().subscribe((id: string) => {
      const index = this.workers.findIndex(e => e.id === id);
      const arr = [...this.workers];
      arr.splice(index, 1);
      this.workers = arr;
    });
  }

  addWorker() {
    this.store.dispatch(new AddWorker());
  }

  trackItem (_index: number, item: WorkerInterface) {
    return item.id;
  }
}
