import { Component, OnInit } from '@angular/core';
import { MemeService } from '../meme.service';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit {
  public memes:any =[];

  constructor(private memeService:MemeService) {

    memeService.getmeme().subscribe(
      (data:any)=>{
      this.memes = data.data.memes
       },
       (err:any)=>{
         alert("internal server error")
         }
    )
    
   }

  ngOnInit(): void {
  }

}
