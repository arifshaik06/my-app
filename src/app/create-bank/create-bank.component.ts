import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankaccountsService } from '../bankaccounts.service';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.css']
})
export class CreateBankComponent implements OnInit {


  public accountform: FormGroup = new FormGroup({
   
    accountname:new FormControl(),
    accountbalance:new FormControl(),

    accountnumber:new FormControl(),

    city:new FormControl(),

    profile:new FormControl(),



  })

  constructor(private _bankaccountsService:BankaccountsService) { }

  ngOnInit(): void {
  }


  submit(){
    console.log(this.accountform.value);
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
