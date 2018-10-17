import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EventService} from './event.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  notify: any;
  router: any;
  Eventsdata : any = [];
  eventname: any;
  roomno: any;
  date: any;


  constructor(private EventService: EventService) { }

  ngOnInit() {

  }
  addEvent() {
    if (!this.eventname || !this.roomno || !this.date) {

      console.log("error");
    }
    else {
      
      this.Eventsdata = {
        'eventname': this.eventname,
        'roomno': this.roomno,
        'date': this.date

      }
      this.EventService.AddEvent(this.Eventsdata).subscribe((response) => {
        console.log(response._body);
        console.log("sucess");
        if (response.status === 200 && response._body) {
          this.notify.openSnackBar("user added successfully!", "");
          this.router.navigate(['./']);
        }
        // else {
        //   this.notify.openSnackBar("Sorry,Try again", "");
        // }
      },
        error => {
          console.log(error);

        });
    }

  }
}
