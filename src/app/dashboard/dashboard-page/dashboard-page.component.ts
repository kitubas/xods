import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {


  stocks: Stock[] = [];


  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.timeDiffCalc;
  }




  /*get  daysBetween(): String {

    var date1 = new Date("10/11/2020");
    var date2 = new Date();
    var Difference_In_Time = ((date2.getTime() - date1.getTime())/1000);
    var days_difference = Math.floor(Difference_In_Time / ( 60 * 60 * 24));


    return `${days_difference + " dias"}`;
  }
  get  hoursBetween(): String {

    var date1 = new Date("10/11/2020");
    var date2 = new Date();
    var Difference_In_Time = ((date2.getTime() - date1.getTime())/1000);
    var days_difference = Math.floor(Difference_In_Time / ( 60 * 60 * 24));


    return `${days_difference + " dias"}`;
  }
  get  minutesBetween(): String {

    var date1 = new Date("10/11/2020");
    var date2 = new Date();
    var Difference_In_Time = ((date2.getTime() - date1.getTime())/1000);
    var days_difference = Math.floor(Difference_In_Time / ( 60 * 60 * 24));


    return `${days_difference + " dias"}`;
  }*/


  get today(){
    var date2 = new Date();
    return date2.toLocaleDateString();
  }
  get dia1(){
    date1 = new Date("10/11/2020");
    return date1.toLocaleDateString();
  }

  get timeDiffCalc(): String {
    var date1 = new Date("10/11/2020");
    var date2 = new Date();
    let diffInMilliSeconds = Math.abs(date2.getTime() - date1.getTime()) / 1000;

    // calculate days
    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;
    console.log('calculated days', days);

    // calculate hours
    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;
    console.log('calculated hours', hours);

    // calculate minutes
    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;
    console.log('minutes', minutes);

    let difference = '';
    if (days > 0) {
      difference += (days === 1) ? `${days} dias, ` : `${days} dias, `;
    }

    difference += (hours === 0 || hours === 1) ? `${hours} horas, ` : `${hours} horas, `;

    difference += (minutes === 0 || hours === 1) ? `${minutes} minutos` : `${minutes} minutos`;

    return difference;
  }




}

var date1 = new Date("11/10/2021");
let date2 = new Date().toDateString().toLocaleString();



