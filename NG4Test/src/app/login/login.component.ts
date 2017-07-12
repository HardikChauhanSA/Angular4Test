import { Component, OnInit } from '@angular/core';
import {ServerService} from './../server.service';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email : string;
  public password : string;

  constructor(private serverService : ServerService, private router : Router) {
      this.email = '';
      this.password = '';
   }

  ngOnInit() {
  }

login(email : string, password : string){
  if(email == '' || password == ''){
    alert("Invalid email or password");
  } else {
    this.serverService.callLogin(email, password).subscribe(
    (response) => {
      console.log(response);
    },
    (error) => console.log(error)
  );
  }
}

register(){
  
}


}
