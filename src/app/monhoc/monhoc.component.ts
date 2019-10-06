import { Component, OnInit } from '@angular/core';
import { subjects } from '../dulieu/subjects'

@Component({
  selector: 'app-monhoc',
  templateUrl: './monhoc.component.html',
  styleUrls: ['./monhoc.component.scss']
})
export class MonhocComponent implements OnInit {
  subjects = [...subjects];
  config
  constructor() {
    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.subjects.length
    }
   }

  ngOnInit() {
  }
  pageChanged(event){
    this.config.currentPage = event;
  }

}
