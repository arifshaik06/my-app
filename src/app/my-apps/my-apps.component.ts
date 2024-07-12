import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-apps',
  templateUrl: './my-apps.component.html',
  styleUrls: ['./my-apps.component.css']
})
export class MyAppsComponent implements OnInit {

  public time:number = 1;
  public marks:number = 1;
  public rsult:number =1;
  constructor() { }

  ngOnInit(): void {
  }

}
