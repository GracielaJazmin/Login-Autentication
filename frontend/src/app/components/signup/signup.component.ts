import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    user: '',
    password: ''
  }

  constructor(private authService: AuthService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.signUp(this.user)
    .subscribe(
      res => {
        console.log(res.token);
        localStorage.setItem('token', res['token']);
        this.router.navigate(['/accountant'])
      },
      err => console.log(err)
    )
  }

}
