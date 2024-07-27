import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankaccountsService } from '../bankaccounts.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.css']
})
export class CreateBankComponent implements OnInit {


  public accountform: FormGroup = new FormGroup({
   
    account_name:new FormControl(),
    available_balance:new FormControl(),

    account_number:new FormControl(),

    city:new FormControl(),

    profie_picture:new FormControl(),



  })
  public id:string ="";
  constructor(private _bankaccountsService:BankaccountsService ,private _activatedRoute:ActivatedRoute) {

    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.id =data.id ;
        _bankaccountsService.getbankaccount(data.id).subscribe(
          (data:any)=>{
            this.accountform.patchValue(data)
          }
        )
      }
    )
   }

  ngOnInit(): void {
  }


  submit(){
    console.log(this.accountform.value);
    if(this.id){
      this._bankaccountsService.updatebank(this.accountform.value,this.id).subscribe(
        (data:any)=>{
          alert("updated successfully!!");
          this.accountform.reset();
        },
        (err:any)=>{
          alert("internal server error")
        }
      )
    }

    else{
    this._bankaccountsService.createbank(this.accountform.value).subscribe(
      (data:any)=>{
        alert("created successfully!!!")
        this.accountform.reset();
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
    }
  }

}
