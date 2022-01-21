import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  isLoggedin = false;
  user!: any;

  constructor(public login: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedin = this.login.isLoggedin();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data) => {
      this.isLoggedin = this.login.isLoggedin();
      this.user = this.login.getUser();
    });
  }

  public logout() {
    this.login.logout();
    this.router.navigate(['/login']);
    this.login.loginStatusSubject.next(false);
  }

}
