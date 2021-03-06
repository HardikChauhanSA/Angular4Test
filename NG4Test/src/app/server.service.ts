import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ServerService {

public baseUrl = "http://111.93.82.91:3000";
public login = "/auth/login";
public register = "/auth/signup";
  constructor(private http : Http) {}
  
     callLogin(email : string, password:string){
      return this.http.post(this.baseUrl + this.login, {email : email, password:password} )
    }

    registerUser(person : any){
      return this.http.post(this.baseUrl + this.register, {person} )
    }

}
