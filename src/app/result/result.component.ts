import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data1/data.service';
import { AuthService } from '../services/Authentication/auth.service'
import { Location } from '@angular/common'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  total : number;
  temp : number ;
  mark :number;
  point : number;
  constructor(private route : ActivatedRoute, 
    private data : DataService, 
    private authService : AuthService,
    private location : Location) { }
  public pieChartLabels = ['Số Câu Sai', 'Số Câu Đúng'];
  public pieChartData = [localStorage.getItem("wrong"), localStorage.getItem("right"),this.temp, 100-this.temp];
  public pieChartType = 'pie';
  public pieChartOptions= {
    borderWidth: 100
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      /* this.mark = parseInt(params.get('mark')); */
     this.mark = parseInt(localStorage.getItem('mark'));
     let id = params.get('id');
     this.data.getquiz(id).subscribe(quiz => {
       this.total = quiz.length;
       this.point = Math.round((this.mark * (10 / this.total)) * 10) / 10;
       this.temp = Math.round(((this.mark/this.total)*100) * 100) / 100        
       this.pieChartData = [this.temp, 100-this.temp];
     })    
    
     
   })
  }

}
