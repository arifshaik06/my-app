import { Component, OnInit } from '@angular/core';
import { BankaccountsService } from '../bankaccounts.service';

@Component({
  selector: 'app-bankaccounts',
  templateUrl: './bankaccounts.component.html',
  styleUrls: ['./bankaccounts.component.css']
})
export class BankaccountsComponent implements OnInit {

  public bankaccounts: any = [];
  public term: string = "";
  public order: string = "";
  public column:string = "";
  public limit:number = 0;
  public page:number = 0;

  constructor(private _bankaccountsService: BankaccountsService) {
    _bankaccountsService.getbankaccounts().subscribe(
      (data: any) => {
        this.bankaccounts = data;
      },
      (err: any) => {
        alert("internal server error")
      }


    )
  }

  ngOnInit(): void {
  }

  filter() {
    this._bankaccountsService.getfilteredbankaccounts(this.term).subscribe(
      (data: any) => {
        this.bankaccounts = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )
  }

  sort() {
    this._bankaccountsService.getsortedBybankaccounts(this.order,this.column).subscribe(
      (data: any) => {
        this.bankaccounts = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )
  }

  search(){
    this._bankaccountsService.getpaged(this.limit, this.page).subscribe(
      (data: any) => {
        this.bankaccounts = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )
  }
  delete(id:string){
    this._bankaccountsService.deletebankaccount(id).subscribe (
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
