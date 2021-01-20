import { Component, OnInit } from '@angular/core';
import {DateService} from '../shared/date.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {
  public dateService: DateService;
  form: FormGroup;

  constructor(private ds: DateService) {
    this.dateService = ds;
    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {}

  submit(): void {
    const { title } = this.form.value;
  }

}
