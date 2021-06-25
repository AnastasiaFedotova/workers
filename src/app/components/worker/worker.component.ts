import { Component, Input, OnInit } from '@angular/core';
import { WorkerInterface } from './../../interface/worker';
import { LogInfoInterface } from './../../interface/logInfo';
import { SocketService } from './../../services/socket.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit {
  @Input() worker: WorkerInterface | null = null;
  logs: string[] = [];
  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.socketService.onMessage().subscribe((msg: LogInfoInterface) => {
      if (this.worker && msg.workerId === this.worker.id) this.logs.push(msg.logMessages);
    });
  }

  killWorker() {

  }
}
