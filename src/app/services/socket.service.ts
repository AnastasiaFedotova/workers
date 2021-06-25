import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { LogInfoInterface } from '../interface/logInfo';
import { WorkerInterface } from '../interface/worker';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io(environment.url);
  }

  onMessage(): Observable<LogInfoInterface> {
    return new Observable((observer) => {
      this.socket.on('message', (msg: LogInfoInterface) => {
        observer.next(msg);
      });
    });
  }

  killWorker(): Observable<string> {
    return new Observable((observer) => {
      this.socket.on('workerDeath', (id: string) => {
        observer.next(id);
      });
    });
  }
}
