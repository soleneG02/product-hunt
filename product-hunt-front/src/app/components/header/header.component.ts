import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() changedDate = new EventEmitter<MatDatepickerInputEvent<Date>>();
  @Input() date: Date;
  formDate: FormControl;
  maxDate: Date;

  constructor() { }

  ngOnInit(): void {
    if (!this.date) {
      this.date = new Date();
    }
    this.formDate = new FormControl(this.date);
    this.maxDate = new Date();
  }

  emitChangedDate(event: MatDatepickerInputEvent<Date>) {
    this.changedDate.emit(event);
  }
}
