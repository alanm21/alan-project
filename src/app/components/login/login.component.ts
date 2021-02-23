import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/auth.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {login: "", passwd: "", token: ""};
  recordar = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('login')) {
      this.user.login = localStorage.getItem('login') || "";
      this.recordar = true;
    }
  }

  login() {
    this.auth.authUser(this.user, this.recordar).subscribe(
      //Si funciona be:
      u => {
        console.log(u);
        this.user = u;
        this.router.navigate(['circuitos'])
      },
      //Si falla:
      e => console.log(e)
    );
  }

}
