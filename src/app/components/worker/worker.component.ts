import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WorkerInterface } from './../../interface/worker';
import { LogInfoInterface } from './../../interface/logInfo';
import { SocketService } from './../../services/socket.service';
import { RemoveWorker } from 'src/app/store/actions/removedWorker.actions';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit {
  @Input() worker: WorkerInterface | undefined;
  logs: string[] = [];
  killed: boolean = false;
  constructor(private store: Store<AppState>, private socketService: SocketService) { }

  ngOnInit(): void {
    this.socketService.onMessage().subscribe((msg: LogInfoInterface) => {
      if (msg.workerId === this.worker?.id) this.logs.push(msg.logMessages);
    });
  }

  killWorker() {
    if (this.worker) {
      this.store.dispatch(new RemoveWorker(this.worker.id));
      this.killed = true;
    }
  }
}
