import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../app/services/data1/data.service'
import { map } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router';
import { quiz } from '../model/quiz';

@Component({
  selector: 'app-tracnghiem',
  templateUrl: './tracnghiem.component.html',
  styleUrls: ['./tracnghiem.component.scss']
})
export class TracnghiemComponent implements OnInit {
  quiz
  config;
  constructor(private get: DataService, private route: ActivatedRoute) { 
    this.config = {
      itemsPerPage: 1,
      currentPage: 1,
      totalItems: quiz.length
    };
  }
  logo   
  listChoose = []
  changed(choose, index) {
    this.listChoose[index] = choose
    console.log(choose);
  }
  ceil(number) {
    return Math.ceil(number)
  }

  answer = [];
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.get.getquiz(id).pipe(
        map(quiz => this.quiz = quiz)
      ).subscribe(quiz => {
        this.config.totalItems = quiz.length
      })

    })

    
    
  }
  onGetFirstPage() {
    this.config = {...this.config, currentPage: 1}
  }
  up() {
    this.config.currentPage ++;
  }
  down() {
    this.config.currentPage --;
  }
    onGetLastPage() {
      this.config = {...this.config, currentPage: (this.config.totalItems / this.config.itemsPerPage)}
  };
  
    

}
