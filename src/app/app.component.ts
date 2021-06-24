import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SocketService } from './services/socket.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private socketService: SocketService) {
  }

  ngOnInit() {
    this.socketService.onMessage().subscribe(msg => {
      console.log(msg);
    });
  }
}
