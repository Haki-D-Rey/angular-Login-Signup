import { Component, OnInit } from '@angular/core';
import { dataHtmlForm, htmlFormType } from './signupHtmlData'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formNewUser: ISignup = {
    username: '',
    password: '',
    email: '',
    phone: ''
  }

  dataHtml: htmlFormType[] = dataHtmlForm

  signupForm: FormGroup = new FormGroup([])

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: [this.formNewUser.username, [Validators.required, Validators.minLength(5)]],
      password: [this.formNewUser.password, [Validators.required, Validators.minLength(5)]],
      email: [this.formNewUser.email, [Validators.required, Validators.minLength(5)]],
      phone: [this.formNewUser.phone, [Validators.required, Validators.minLength(5)]]
    });
  }

  singupData(singup: FormGroup) {
    return console.log(singup);
  }

  get username() {
    return this.signupForm.get('username');
  }
  get password() {
    return this.signupForm.get('password')
  };

  get email() {
    return this.signupForm.get('email');
  }
  get phone() {
    return this.signupForm.get('phone')
  };




}

interface ISignup {
  username: string;
  password: string;
  email: string;
  phone: string;
}
