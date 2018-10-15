import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hosters',
  templateUrl: './hosters.component.html',
  styleUrls: ['./hosters.component.css']
})
export class HostersComponent implements OnInit {
  VisitorName: any = [];
  Role: any = [];
  Mobile: any = [];
  date: any = [];

  constructor() { }

  ngOnInit() {
  }
  registerHoster() {
    const Hosterdata = {
      'HosterName': this.VisitorName,
      'HosterRole': this.Role,
      'HosterMobile': this.Mobile,
      'HosterDate': this.date,
    }
}
}
