import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  loginForm : FormGroup =  new FormGroup({
    username: new FormControl("", Validators.minLength(3)),
    password: new FormControl("", Validators.minLength(3)),
  })

  ngOnInit(): void {

  }

  login(){
    // let username = this.loginForm.get("username")?.value;
    // let password = this.loginForm.get("password")?.value;
    let user = this.loginForm.value;
    this.loginService.login(user.username,user.password).subscribe(data=>{
      localStorage.setItem("userToken", JSON.stringify(data));

      for (let i = 0; i < data.roles.length; i++) {
        if (data.roles[i].name == 'admin'){
          this.router.navigate(['/products/show'])
          return;
        }else {
          this.router.navigate(['/products/create'])
          return;
        }
      }
    })
  }

}
