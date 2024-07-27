import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  public studentform:FormGroup = new FormGroup({
    name:new FormControl(),
    dob:new FormControl(),
    phone:new FormControl(),
    email:new FormControl(),
    profile_picture:new FormControl(),
    city:new FormControl(),

  })

  public id:string ="";

  constructor(private _studentsService:StudentsService,private _activatedRoute:ActivatedRoute) {
    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;
        _studentsService.getstudent(data.id).subscribe(
          (data:any)=>{
            this.studentform.patchValue(data);
          }
        )
      }
    )
   }

  ngOnInit(): void {
  }

  submit(){

    if(this.id){
      this._studentsService.updatestudent(this.studentform.value,this.id).subscribe(
        (data:any)=>{
          alert("updated successfully!!!");
          this.studentform.reset();
        },
        (err:any)=>{
          alert("internal error")
        }
      )
    }
    else{
    this._studentsService.createstudent(this.studentform.value).subscribe(
      (data:any)=>{
        alert("created successfully!!")
        location.reload();
      },
      
      (err:any)=>{
        alert("internally server error")
      }
    )
  }

}
}