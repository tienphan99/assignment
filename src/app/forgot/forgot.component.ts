import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/Authentication/auth.service'

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  constructor(public authService : AuthService) { }

  ngOnInit() {
  }

}
