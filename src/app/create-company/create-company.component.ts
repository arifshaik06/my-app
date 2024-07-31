import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  public companyForm:FormGroup =new FormGroup({
    companyName:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    founded:new FormControl(null,[Validators.required]),
    ceo:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    location:new FormGroup({
      address:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      zipcode:new FormControl(),
      country:new FormControl()
    }),
    departments:new FormArray([]),
    companyType: new FormControl()
    

  })
  get departmentsFormArray(){
    return this.companyForm.get('departments') as FormArray;
  }

  adddepartments(){
    this.departmentsFormArray.push(
      new FormGroup({
        name:new FormControl(null,[Validators.required]),
        head:new FormControl(null,[Validators.required]),
        employees:new FormControl(null,[Validators.required]),
        budget:new FormControl(null,[Validators.required])
      })
    )
  }

  deleteCard(i:number){
    this.departmentsFormArray.removeAt(i);
  }

  constructor() { 

    this.companyForm.get('companyType')?.valueChanges.subscribe(
      (data: any) => {
        if (data == 'service') {
          this.companyForm.addControl('clientName', new FormControl(null,[Validators.required,Validators.minLength(3)]));
          this.companyForm.removeControl('productName');
        }
        else if (data == 'product') {
          

          this.companyForm.addControl('productName', new FormControl(null,[Validators.required,Validators.minLength(3)]));
          this.companyForm.removeControl('clientName');
        }

      }
    )
  }

  ngOnInit(): void {
  }
  submit() {
    this.companyForm.markAllAsTouched();
    console.log(this.companyForm)
  }


}
