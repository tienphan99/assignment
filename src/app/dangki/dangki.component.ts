import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/Authentication/auth.service'

@Component({
  selector: 'app-dangki',
  templateUrl: './dangki.component.html',
  styleUrls: ['./dangki.component.scss']
})
export class DangkiComponent implements OnInit {
  
  constructor(public authService : AuthService) { }

  ngOnInit() {
    

  }

}
