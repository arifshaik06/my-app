import { Component, OnInit } from '@angular/core';
import { MyntraService } from '../myntra.service';

@Component({
  selector: 'app-myntra',
  templateUrl: './myntra.component.html',
  styleUrls: ['./myntra.component.css']
})
export class MyntraComponent implements OnInit {

  public products:any = [];

  constructor(private _myntraService:MyntraService) { 
    _myntraService.getproducts().subscribe(
      (data:any)=>{
        this.products= data;
       },
       (err:any)=>{
        alert("internal server error")
        }
    ) 
      
   
   
  }

  ngOnInit(): void {
  }

}
