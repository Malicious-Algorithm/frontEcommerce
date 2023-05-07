import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}

  //====================== ////   LOGIN   //// ================================
  public login(user: any): Observable<any> {
    return this.http.post("http://localhost:9099/authenticate", user);
  }

  public signIn(token: any){
    localStorage.setItem('token',token);    
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }

  public logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logOut();
      return null;
    }
  }
  //====================== ////  FIN LOGIN   //// ================================

  //====================== ////   SIGNUP   //// ================================
  public signUpService(user: any): Observable<any>{
    return this.http.post("http://localhost:9093/cliente/registrarNuevoCliente", user,{ observe: 'response' }); 
  }
  //====================== ////  FIN LOGIN   //// ================================

}