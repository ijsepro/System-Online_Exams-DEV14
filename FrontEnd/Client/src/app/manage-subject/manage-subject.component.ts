import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managesubject',
  templateUrl: './manage-subject.component.html',
  styleUrls: ['./manage-subject.component.scss']
})
export class ManagesubjectComponent implements OnInit {
  test : Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
