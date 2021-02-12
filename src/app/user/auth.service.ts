import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = '/assets/json/Users.json';

  //Funcio per autenticar el usuari
  //Demanar al servidor quin es el token per a que ixa sessio es mantinga oberta
  authUser(user: User, recordar : boolean): Observable<User> {
    return this.http.get<User>(this.url).pipe(
      map(u => { 
        u['passwd'] = user.passwd;
        //Que guarde en local storage el token
        localStorage.setItem('token', u.token); 
        if(recordar) localStorage.setItem('login', u.login)
        return u;
      })
    );
  }

  isAuth(): boolean{
    if (localStorage.getItem('token')) { //?.length > 2
      return true;
    } else {
      return false;
    }
  }

  logOut(){
    localStorage.removeItem('token');
  } 
}
