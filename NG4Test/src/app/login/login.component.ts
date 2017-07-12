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

login(email : string, password : string){
  if(email == '' || password == ''){
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
