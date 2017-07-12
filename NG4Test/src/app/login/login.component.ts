import { Component, OnInit } from '@angular/core';
import {ServerService} from './../server.service';
import { RouterModule, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm : FormGroup;
  constructor(private serverService : ServerService, private router : Router) {
   }

  ngOnInit() {
    this.myForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
});
  }

login(){
  var email = this.myForm.get('email').value;
 var password = this.myForm.get('password').value;
 console.log(email);
 console.log(password);
  if(email == '' || password == '' || email == null || password == null){
    alert("Invalid email or password");
  } else {
    this.serverService.callLogin(email, password).subscribe(
    (response) => {
      console.log(response);
      this.router.navigate(['vehicles']);
    },
    (error) => console.log(error)
  );
}
this.myForm.reset();
}

register(){
  
}


}
