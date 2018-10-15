import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  VisitorName: any = [];
  Role: any = [];
  Mobile: any = [];
  date: any = [];
  rooms: any = []


  constructor() { }

  ngOnInit() {
  }
  EventsRegister(){
  const Eventsdata = {
    'VisitorName': this.VisitorName,
    'Role': this.Role,
    'Mobile': this.Mobile,
    'date': this.date,
  }
}
}
