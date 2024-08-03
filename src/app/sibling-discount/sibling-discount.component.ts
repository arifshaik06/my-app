import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-sibling-discount',
  templateUrl: './sibling-discount.component.html',
  styleUrls: ['./sibling-discount.component.css']
})
export class SiblingDiscountComponent implements OnInit {

  public count:any = 0;

  constructor(private _siblingService:SiblingService) {

    _siblingService.getItems().subscribe(
      (data:any)=>{
        this.count=data;
      }
    )
   }

  ngOnInit(): void {
  }

  

}
