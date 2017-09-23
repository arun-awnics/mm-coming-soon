import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { TimerService } from './shared/time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  time: any;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    this.time = this.timerService.timer(new Date('Jan 1, 2018 00:00:00'));
  }
}
