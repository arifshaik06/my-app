import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataofemp',
  templateUrl: './dataofemp.component.html',
  styleUrls: ['./dataofemp.component.css']
})
export class DataofempComponent implements OnInit {

  public newemployee = {
    emp_id: 0,
    emp_name: "",
    role: "",
    joiningdate: "",
    phoneno: 0,
    email: "",
    dob: "",
    gender: "",
    address: ""
  };

  public employees: any = [
    { emp_id: 3344, emp_name: "prakash", role: "ux developer", joiningdate: new Date("9-22-2022"), phoneno: 9988446623, email: "pa@gmail.com", dob: new Date("8-10-1996"), gender: "male", address: "D no:201,lkpl,hyd" },
    { emp_id: 3398, emp_name: "mounika", role: "backend developer", joiningdate: new Date("12-10-2023"), phoneno: 7799445623, email: "ma@gmail.com", dob: new Date("6-3-1998"), gender: "female", address: "D no:21,khairtabad,hyd" },
    { emp_id: 3366, emp_name: "rajesh", role: "frontend developer", joiningdate: new Date("2-1-2022"), phoneno: 7799330868, email: "ra@gmail.com", dob: new Date("8-10-1997"), gender: "male", address: "D no:501,kphb,hyd" },
    { emp_id: 3301, emp_name: "vinece", role: "team lead", joiningdate: new Date("9-6-2019"), phoneno: 9988442206, email: "vinece@gmail.com", dob: new Date("10-28-1992"), gender: "female", address: "D no:201,lingampally,hyd" },
    { emp_id: 3330, emp_name: "ajay", role: "ux developer", joiningdate: new Date("6-2-2022"), phoneno: 9909053365, email: "ajay@gmail.com", dob: new Date("12-11-1996"), gender: "male", address: "D no:501,ameerpet,hyd" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  delete(i: number) {
    this.employees.splice(i, 1);
  }
  register() {
    this.employees.push({ ...this.newemployee });
    this.newemployee = {
      emp_id: 0,
      emp_name: "",
      role: "",
      joiningdate: "",
      phoneno: 0,
      email: "",
      dob: "",
      gender: "",
      address: ""
    }

  }
}
