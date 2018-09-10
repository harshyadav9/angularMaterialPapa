import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/User';
import { map, catchError } from 'rxjs/operators';
 
@Injectable({ providedIn: 'root' })
export class UserService {
    baseUrl = 'http://localhost:8080/loggedInUserDetails';
    baseUrl1 = 'http://localhost:8080/login';
    constructor(private http: HttpClient) { }
 
    loginData(data) {
        console.log("data", data);
        return this.http.post(this.baseUrl1,{username:"Asas",password:"asas"});
    }

    getUserCredentials(){
        alert()
        return this.http.get(this.baseUrl);
    }
}