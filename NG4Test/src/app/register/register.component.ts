import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder }   from '@angular/forms';
import {ServerService} from './../server.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

private person = {};
myForm : FormGroup;
  constructor(private fb : FormBuilder, private serverService : ServerService) { 
    this.myForm = this.fb.group({
      
    });
    
  }

  ngOnInit() {
   
  }

  registerUser(person : any){
      this.serverService.registerUser(this.person).subscribe(
    (response) => {
      console.log(response);
    },
    (error) => console.log(error)
  );
  }

}
