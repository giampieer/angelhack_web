import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  loginUser(event){
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username')
    const password = target.querySelector('#password')
    
    
    console.log(username, password)
  }
}
