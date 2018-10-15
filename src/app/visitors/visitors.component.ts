import { Component, OnInit } from '@angular/core';
import {VisitorService} from './visitors.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.css']
})
export class VisitorsComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  VisitorName: any=[];
  VerifyID: any=[];
  Mobile: any=[];
  date: any=[];
  rooms: any=[]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      VisitorName: ['', Validators.required],
      VerifyID: ['', Validators.required],
      Mobile: ['', [Validators.required, Validators.email]],
      date: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
register(){
  const data = {
   'VisitorName' :  this.VisitorName,
    'VerifyID': this.VerifyID,
   'Mobile': this.Mobile,
   'date': this.date,
}
}
}