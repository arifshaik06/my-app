import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-sibling-cart',
  templateUrl: './sibling-cart.component.html',
  styleUrls: ['./sibling-cart.component.css']
})
export class SiblingCartComponent implements OnInit {

  public count:any = 0;

  constructor(private _siblingservice:SiblingService) {

    _siblingservice.getItems().subscribe(
      (data:any)=>{
        this.count=data;
      }
    )
   }

  ngOnInit(): void {
  }

}
