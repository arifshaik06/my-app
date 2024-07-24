import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

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

  constructor(private _vehicleService:VehicleService) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.vehicleform.value);
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
