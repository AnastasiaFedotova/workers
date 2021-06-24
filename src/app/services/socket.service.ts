import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io(environment.url);
  }

  onMessage() {
    return new Observable(observer => {
      this.socket.on('message', msg => {
        observer.next(msg);
      });
    });
  }
}
