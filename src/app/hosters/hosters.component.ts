import { Component, OnInit } from '@angular/core';
import { hosterService } from './hosters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hosters',
  templateUrl: './hosters.component.html',
  styleUrls: ['./hosters.component.css']
})
export class HostersComponent implements OnInit {
  name: any;
  empid: any;
  designation: any;
  department: any;
  HostData: any =[];
  mobileno: any;
  username: any;
  password: any;

  constructor(private HostersService: hosterService , private router: Router) { }

  ngOnInit() {
  }
  HostRegister(){
    if (!this.name || !this.empid || !this.designation || !this.department || !this.mobileno) {

      console.log("error");
    }
    else {

      this.HostData = {
        'username':this.username,
        'password': this.password,
        'name': this.name,
        'empid': this.empid,
        'designation': this.designation,
        'department': this.department,
        'mobileno' : this.mobileno

      }
      this.HostersService.hostData(this.HostData).subscribe((response) => {
        if (response.status === 200) {
          // this.notify.openSnackBar("user added successfully!", "");
          this.router.navigate(['/host-dashboard']);
          console.log("successsssss")
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
  HostersData(HostData: any): any {
    throw new Error("Method not implemented.");
  }
}
