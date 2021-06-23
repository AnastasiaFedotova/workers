import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import io from 'socket.io-client';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const socket = io(environment.url);

    socket.on("message", data => {
      console.log(data);
    });
  }
}
