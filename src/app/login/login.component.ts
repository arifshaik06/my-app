import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginform:FormGroup = new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
  })

  constructor(private _loginService:LoginService,private _router:Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginform);
    this._loginService.login(this.loginform.value).subscribe(
      (data:any)=>{
        alert("login success");

        //go to dashboard
        this._router.navigateByUrl("/dashboard");
        //store token
        sessionStorage.setItem("my-app-token",data.token)
      },
      (err:any)=>{
        alert("login failed");
      }
    )

  }

}
