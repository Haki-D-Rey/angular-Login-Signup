import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dataHtmlForm, htmlFormType } from './htmlDataFormGroup'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credential: login = {
    userName: '',
    password: ''
  };

  DataHtml: htmlFormType[] = dataHtmlForm;

  loginForm: FormGroup = new FormGroup([]);
  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: [this.credential.userName, [Validators.required, Validators.minLength(5)]],
      password: [this.credential.password, [Validators.required, Validators.minLength(5)]]
    });
  }

  logindata(login: FormGroup) {
    return console.log(login)
  }

  get userName() {
    return this.loginForm.get('userName');
  }
  get password() {
    return this.loginForm.get('password')
  };

}

interface login {
  userName: string;
  password: string;
}


