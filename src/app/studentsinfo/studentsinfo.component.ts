import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-studentsinfo',
  templateUrl: './studentsinfo.component.html',
  styleUrls: ['./studentsinfo.component.css']
})
export class StudentsinfoComponent implements OnInit {

  public student :any ={};

  constructor(private _activatedRoute:ActivatedRoute, private _studentsService:StudentsService) {
    _activatedRoute.params.subscribe(
      (data:any)=>{
       _studentsService.getstudent(data.id).subscribe(
        (data:any)=>{
          this.student = data;
        },
        (err:any)=>{
          alert("internal server error")
        }
       )

      }
    )
   }

  ngOnInit(): void {
  }

}
