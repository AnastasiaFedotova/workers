import { Component, Input, OnInit } from '@angular/core';
import { WorkerInterface } from './../../interface/worker';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit {
  @Input() worker: WorkerInterface | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
