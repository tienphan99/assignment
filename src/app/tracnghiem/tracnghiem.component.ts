import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../app/services/data1/data.service'
import { map } from 'rxjs/operators'
import { ActivatedRoute, Router } from '@angular/router';
import { quiz } from '../model/quiz';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tracnghiem',
  templateUrl: './tracnghiem.component.html',
  styleUrls: ['./tracnghiem.component.scss']
})
export class TracnghiemComponent implements OnInit {
  quiz
  config;
  constructor(private get: DataService, private route: ActivatedRoute, private _http: HttpClient, private title: Title, private location: Location, private _router: Router) {
    this.config = {
      itemsPerPage: 1,
      currentPage: 1,
      totalItems: quiz.length
    };
  }
  id
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
  //Storage Đối tượng lưu trữ
  //Phương thức lưu trữ setItem ,getItem()
  submit() {
    const isConfirm = confirm("Are you sure Submit?");
    if (isConfirm) {
      let mark = 0;
      for (let i = 0; i < this.quiz.length; i++) {
        if ((this.listChoose[i] > 0) && (this.quiz[i].Answers[this.listChoose[i] - 1].Id === this.quiz[i].AnswerId))
          ++mark;
        localStorage.setItem("right", mark.toString());
        localStorage.setItem("wrong", (this.config.totalItems - mark).toString());
      }
      let route = "/monhoc/" + this.id + "/result";
      this._router.navigate([route]);
    }
  }
  onGetFirstPage() {
    this.config = { ...this.config, currentPage: 1 }
  }
  up() {
    this.config.currentPage++;
  }
  down() {
    this.config.currentPage--;
  }
  onGetLastPage() {
    this.config = { ...this.config, currentPage: (this.config.totalItems / this.config.itemsPerPage) }
  };



}
