import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

  public count:number = 0;

  constructor(private _commonservice:CommonService) { 
    _commonservice.getCount().subscribe(
      (data:any)=>{
        this.count = data;
      }
    )
  }

  ngOnInit(): void {
  }

  

}
