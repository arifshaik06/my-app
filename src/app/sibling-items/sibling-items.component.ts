import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-sibling-items',
  templateUrl: './sibling-items.component.html',
  styleUrls: ['./sibling-items.component.css']
})
export class SiblingItemsComponent implements OnInit {

  public count:any = 0;

  constructor(private _siblingService:SiblingService) { }

  ngOnInit(): void {
  }

  addtocart(){
    this._siblingService.setItems(this.count++);
  }

}
