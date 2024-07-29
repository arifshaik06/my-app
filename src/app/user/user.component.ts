import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { domainvalidators } from './validators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public userform: FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    age: new FormControl(null,[Validators.required,Validators.min(0),Validators.max(100)]),
    phone: new FormControl(null,[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    email: new FormControl(null,[Validators.required,Validators.email,domainvalidators]),
    address: new FormGroup({
      city: new FormControl(null,[Validators.required]),
      pincode: new FormControl(null,[Validators.required]),
    }),
    type: new FormControl(),
    // busfee: new FormControl(),
    // hostelfee: new FormControl(),
    cards:new FormArray([])
  })

  get cardsFormArray(){
    return this.userform.get('cards') as FormArray;
  }

  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        number:new FormControl(null,[Validators.required]),
        expiry:new FormControl(null,[Validators.required]),
        cvv:new FormControl(null,[Validators.required])
      })
    )
  }

  deleteCard(i:number){
    this.cardsFormArray.removeAt(i);
  }

  constructor() {

    this.userform.get('type')?.valueChanges.subscribe(
      (data: any) => {
        if (data == 'dayscholar') {
          //add busfee
          this.userform.addControl('busfee', new FormControl(null,[Validators.min(10000)]));
          this.userform.removeControl('hostelfee');
        }
        else if (data == 'residental') {
          //add hostel fee

          this.userform.addControl('hostelfee', new FormControl(null,[Validators.min(20000)]));
          this.userform.removeControl('busfee');
        }

      }
    )
  }

  ngOnInit(): void {
  }
  submit() {
    this.userform.markAllAsTouched();
    console.log(this.userform)
  }

}
