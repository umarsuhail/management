import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
export interface PeriodicElement {
  position: number;
  name: string;
  Event: string;
  Mobile: number;
  date: string;
  rooms: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'David Beckham', Event: 'visitor', Mobile: 9497656243, date : '12/10/2017', rooms: 2},
  {position: 1, name: 'James cameroon', Event: 'Hoster', Mobile: 9497656243, date : '9/10/2017', rooms: 8},
  {position: 1, name: 'lionel  Messi', Event: 'Visitor', Mobile: 9497656243, date : '5/12/2017', rooms: 4},
  {position: 1, name: 'Neymar Jr', Event: 'Hoster', Mobile: 9497656243, date : '4/12/2017', rooms: 5},
  {position: 1, name: 'Sachn Tend', Event: 'Visitor', Mobile: 9497656243, date : '1/10/2017', rooms: 6},
  {position: 1, name: 'Rahul Dravid', Event: 'Visitor', Mobile: 9497656243, date : '9/11/2017', rooms: 2},
];


@Component({
  selector: 'app-hostdash',
  templateUrl: './hostdash.component.html',
  styleUrls: ['./hostdash.component.css']
})
export class HostdashComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'Event', 'Mobile', 'date', 'rooms'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;

  }

}
