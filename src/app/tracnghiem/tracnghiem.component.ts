import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../app/services/data1/data.service'

import { ActivatedRoute } from '@angular/router';
import { quiz } from '../../app/dulieu/quiz';

@Component({
  selector: 'app-tracnghiem',
  templateUrl: './tracnghiem.component.html',
  styleUrls: ['./tracnghiem.component.scss']
})
export class TracnghiemComponent implements OnInit {
  @Input() quiz: quiz[];
  config;
  constructor(private get: DataService, private route: ActivatedRoute) { 
    this.config = {
      itemsPerPage: 1,
      currentPage: 1,
      totalItems: quiz.length
    }
  }

  answer = [];
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.get.getquiz(id).subscribe(quiz => this.quiz = quiz)
      
    })
  }
  up() {
    this.config.currentPage ++;
  }
  down() {
    this.config.currentPage --;
  }

}
