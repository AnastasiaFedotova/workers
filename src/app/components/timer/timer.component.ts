import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  min: number = 0;
  sec: number = 0;
  maxSec = 60;
  time: string = '';
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.sec >= this.maxSec) {
        this.sec = 0;
        this.min++;
      } else this.sec++;
    }, 1000)
  }

}
