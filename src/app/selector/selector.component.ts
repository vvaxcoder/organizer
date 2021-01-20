import { Component } from '@angular/core';
import { DateService } from '../shared/date.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {
  public dateService: DateService;

  constructor(private ds: DateService) {
    this.dateService = ds;
  }

  go(dir: number): void {
    this.dateService.changeMonth(dir);
  }
}
