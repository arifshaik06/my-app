import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  public ages:number[] = [10,20,30,40,50];
  public states:string[]=["andhra pradesh","telangana","tamil naidu","karnataka"];

  public products:any = [
    {name:"pen",price:20,rating:4},
    {name:"phone",price:20000,rating:4.5},
    {name:"laptop",price:25000,rating:4.8},
    {name:"remote",price:1000,rating:2},
    {name:"shirt",price:5000,rating:1.8},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
