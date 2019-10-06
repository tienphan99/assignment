import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gioithieu',
  templateUrl: './gioithieu.component.html',
  styleUrls: ['./gioithieu.component.scss']
})
export class GioithieuComponent implements OnInit {

  constructor() { }

  myInfo = {
    firstName: "Văn Tiến",
    lastName: "Phan",
    birthday: "22/11/2000",
    phone: "782343829",
    email: "phanvantien488@gmail.com",
    address: "Saigon",
  }

  ngOnInit() {
  }

}
