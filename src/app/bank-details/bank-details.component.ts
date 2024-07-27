import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankaccountsService } from '../bankaccounts.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  public bank:any = {};
  constructor(private _activatedRoute:ActivatedRoute, private _bankaccountsService:BankaccountsService) { 
    _activatedRoute.params.subscribe(
      (data:any)=>{

      _bankaccountsService.getbankaccount(data.id).subscribe(
          (data:any)=>{
         
            this.bank =data;
          },
          (err:any)=>{
            alert("internal server error");
          }
      )
      
      }
    )
    
  
  }


  ngOnInit(): void {
  }


}