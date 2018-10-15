import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assign = false;
  title = 'myapp';
  assignmember() {
    this.assign = !this.assign;
   
  }
}
