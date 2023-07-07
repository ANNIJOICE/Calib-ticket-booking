import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ticket-booking-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{

  loginForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl()
  });

  constructor(private route: Router) {}

  ngOnInit(): void {
      if(localStorage.getItem('isLoggedIn') === "true") {
        this.route.navigate(['/dashboard'])
      }
  }

  logIn(): void{
    console.log("joice")
    localStorage.setItem("isLoggedIn", "true");
    this.route.navigate(['/dashboard'])
  }
}
