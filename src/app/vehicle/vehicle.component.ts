import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  public vehicles:any = [];
  public term:string = "";
  public column:string ="";
  public order:string = "";
  public limit:number = 0;
  public pageNo:number = 0;


  constructor(private _vehicleservice:VehicleService) {

    _vehicleservice.getvehicles().subscribe(
      (data:any)=>{
       this.vehicles = data;
      },
      (err:any)=>{
        alert("internal server error")
        }
      
    )
  }

  ngOnInit(): void {
  }

  filter(){
    this._vehicleservice.getfilteredvehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles = data ;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

  sort(){
    this._vehicleservice.getsortedvehicles(this.column , this.order).subscribe(
      (data:any)=>{
        this.vehicles = data ;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
  page(){
    this._vehicleservice.getlimitvehicles(this.limit,this.pageNo).subscribe(
      (data:any)=>{
        this.vehicles = data ;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

  delete(id:string){
    this._vehicleservice.deletevehicle(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully!!!!!!");
        location.reload();
      },
      (err:any)=>{
        alert("deleted fails");
      }
    )
  }

}
