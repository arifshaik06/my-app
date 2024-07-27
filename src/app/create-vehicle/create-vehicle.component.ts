import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {

  public vehicleform: FormGroup = new FormGroup({

    Vehicle: new FormControl(),
    manufacture: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
    cost: new FormControl(),


  })

  public id:string = "";

  constructor(private _vehicleService:VehicleService , private _activatedRoute:ActivatedRoute) {

    _activatedRoute.params.subscribe(
      (data:any)=>{
       this.id =data.id;
        _vehicleService.getvehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicleform.patchValue(data);
          }
        )
      }
    )
   }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.vehicleform.value);

    if(this.id){
      //edit
      this._vehicleService.updatevehicle(this.vehicleform.value,this.id).subscribe(
        (data:any)=>{
          alert("updated successfully!!");
          this.vehicleform.reset();
        },
        (err:any)=>{
          alert("internal serever error")
        }
      )
    }
    else{
      //create
    this._vehicleService.createvehicle(this.vehicleform.value).subscribe(
      (data:any)=>{
        alert("created successfully!!!");
        this.vehicleform.reset();
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

}
}