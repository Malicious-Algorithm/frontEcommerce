import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  nombre:string;
  apellido:string;
  email:string;
  password:string;

  constructor(private userService: UsersService, private _router: Router){}

  public signUp(){
    console.log('n: '+this.nombre);
    const user = {nombre:this.nombre,apellido:this.apellido,email:this.email,password:this.password};
    this.userService.signUpService(user).subscribe((data:any)=>{
      if(data.status == 200){
        console.log('status: ' + data.status);
        console.log('data: '+data);
        this._router.navigate(['/signin']);
      }else{
        console.log("? nada"); 
        //no se que hacer aca
      }
    }, (err) => {
      alert("Hubo un problema");
    });
  }
}
