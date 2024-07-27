import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public userform: FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      pincode: new FormControl()
    }),
    type: new FormControl(),
    // busfee: new FormControl(),
    // hostelfee: new FormControl()
  })

  constructor() {

    this.userform.get('type')?.valueChanges.subscribe(
      (data: any) => {
        if (data == 'dayscholar') {
          //add busfee
          this.userform.addControl('busfee', new FormControl());
          this.userform.removeControl('hostelfee');
        }
        else if (data == 'residental') {
          //add hostel fee

          this.userform.addControl('hostelfee', new FormControl());
          this.userform.removeControl('busfee');
        }

      }
    )
  }

  ngOnInit(): void {
  }
  submit() {
    console.log(this.userform)
  }

}
