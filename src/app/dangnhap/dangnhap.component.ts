import { Component, OnInit} from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validator, FormControl, Validators } from '@angular/forms'
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../services/Authentication/auth.service'

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css'],
 
})
export class DangnhapComponent implements OnInit {
  userform: FormGroup
  constructor(private formbuilder: FormBuilder,private title: Title,public authService: AuthService){this.title.setTitle('Login')}
  users;
  submit: boolean = false;
  userlength; 
  ngOnInit() {
    this.userform = this.formbuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,16}$')]],
    })
    }
    email = new FormControl('', [Validators.required, Validators.email]);
    getErrorMessage() {
      return this.email.hasError('required') ? 'Email is required!' :
          this.email.hasError('email') ? 'Not a valid email' :
              '';
    }
    password = new FormControl('', [Validators.required, Validators.minLength(5)]);
    getError() {
      return this.password.hasError('required') ? 'Password is required!' :
          this.password.hasError('password') ? 'Not a valid email' :
              '';
    }


  
    
          
   
  

}
