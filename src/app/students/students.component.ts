import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public students : any =[];
  public term:string = "";
  public id:string ="";
 


  constructor(private _studentsService:StudentsService) {

    _studentsService.getstudentdetails().subscribe(
      (data:any)=>{
        this.students = data;
       },
       (err:any)=>{
         alert("internal server error")
         }
       
     )
    
   }

  ngOnInit(): void {
  }

 filter(){
  this._studentsService.getfilteredstudentsdetails(this.term).subscribe(
    (data:any)=>{
     this.students = data ;
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
 }

 delete(id:string){
  this._studentsService.deletestudents(id).subscribe(
    (data:any)=>{
      alert("deleted successfully!!!");
      location.reload();
    },
    (err:any)=>{
      alert("deleted failed");
    }
  )
 }

}
