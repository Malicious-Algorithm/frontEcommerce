import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nombre:String;
  password:String;
  token:String;
  id:number;
  email:String;
  

  constructor(public userService: UsersService, private router:Router) {}

  
  login() {
    const user = {nombre:this.nombre, password: this.password};
    this.userService.login(user).subscribe((data:any) => {
      this.userService.signIn(data.token);
      if(this.userService.isLoggedIn()){
        alert("Bienvenido!");
        this.router.navigate(['./shop']);
      }else{
        console.log();
        
      }
    })
  }
}
