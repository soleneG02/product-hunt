import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss']
})
export class AuthorDetailsComponent implements OnInit {

  @Input() author: User;
  @Input() makers: User[];

  hasMakers: boolean;

  constructor() { }

  ngOnInit(): void {
    if (!this.makers) { return; }
    this.hasMakers = this.makers.length !== 0;
  }

}
