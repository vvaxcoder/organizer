import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DateService } from '../shared/date.service';

interface Day {
  value: moment.Moment;
  active: boolean;
  disabled: boolean;
  selected: boolean;
}

interface Week {
  days: Day[];
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  public calendar: Week[] | undefined;

  constructor(private ds: DateService) {}

  ngOnInit(): void {
    this.ds.date.subscribe(this.generate.bind(this));
  }

  generate(now: moment.Moment): void {
    const startDay = now.clone().startOf('month').startOf('week');
    const endDay = now.clone().endOf('month').endOf('week');
    const date = startDay.clone().subtract(1, 'day');
    const calendar: Week[] = [];

    while (date.isBefore(endDay, 'day')) {
      calendar.push({
        days: Array(7)
          .fill(0)
          .map(() => {
            const value = date.add(1, 'day').clone();
            const active = moment().isSame(value, 'date');
            const disabled = !moment().isSame(value, 'month');
            const selected = moment().isSame(value, 'date');
            return {
              value, active, disabled, selected
            };
          })
      });
    }

    this.calendar = calendar;
  }
}
