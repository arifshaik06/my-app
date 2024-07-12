import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
public employees:any = [
  {name:'ashok',age:25,dob:new Date('12/26/1998'),experience:2,package:6},
  {name:'venkat',age:35,dob:new Date('10/23/1988'),experience:8,package:18},
  {name:'sudheer',age:23,dob:new Date('10-20-1999'),experience:3,package:8},
  {name:'kranthi',age:30,dob:new Date('6-13-1992'),experience:6.5,package:12},
]
  constructor() { } 

  ngOnInit(): void {
  }

}
