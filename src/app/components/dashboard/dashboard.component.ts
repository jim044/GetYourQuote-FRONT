import { Component, OnInit } from '@angular/core';
import { YahooApiService } from 'src/app/services/API/Yahoo/yahoo-api.service';
import * as d3 from "d3";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private yahooApiService : YahooApiService) { }

  ngOnInit(): void {
    
    this.getChartAllCAC40Components();
  }


  getChartAllCAC40Components(){
    console.log("test");
    this.yahooApiService.getAllCac40Components().subscribe((data: Array<String>) => {
      console.log(data[0]);
      this.yahooApiService.getChartByComponent(data[0]).subscribe((mapChart: Object)=>{
        this.createChartLine(mapChart);
      });
    })
  }

  createChartLine(mapChartData){
    d3.select("p").style("color", "red");

    const map = new Map(Object.entries(mapChartData));

    console.log(map);
  }

}
