import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private fb:FormBuilder,private authService:AuthService , private http:HttpClient , private userService:UserService) {

    this.loginForm = this.fb.group({
      username:[null,Validators.required],
      password:[null,Validators.required] 
    })
   }

  ngOnInit() {
  }

  onSubmit(form:any){
    // this.authService.login({
    //   email:form.email,
    //   password:form.password
    // });
    console.log(form);
      // this.http.post('/api/authenticate' , {username:form.username , password:form.password}).subscribe(res=>{
      //   sessionStorage.setItem("currentUser",res["token"]);
      // });
      let data = {username:form.username , password:form.password};
      this.userService.loginData(data).subscribe(res=>{
        console.log("data",data);
      },error=>{
        console.log("error",error);
      });
      this.userService.getUserCredentials().subscribe((data)=>
      console.log("data",data));
  }

}
