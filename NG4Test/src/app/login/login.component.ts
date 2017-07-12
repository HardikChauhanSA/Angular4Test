import { Component, OnInit } from '@angular/core';
import {ServerService} from './../server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email : string;
  public password : string;

  constructor(private serverService : ServerService) {
      this.email = '';
      this.password = '';
   }

  ngOnInit() {
  }

login(email : string, password : string){
  if(email == '' || password == ''){
    alert("Invalid email oir password");
  } else {
    this.serverService.callLogin(email, password).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  );
  }
}


}
