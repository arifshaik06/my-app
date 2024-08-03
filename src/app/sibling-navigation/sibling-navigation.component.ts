import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-sibling-navigation',
  templateUrl: './sibling-navigation.component.html',
  styleUrls: ['./sibling-navigation.component.css']
})
export class SiblingNavigationComponent implements OnInit {

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
