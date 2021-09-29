import { Chart, registerables } from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/matches.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  chart: any = [];
  allDates = [];
  homeTeams = [];
  homeScores = [];
  awayTeams = [];
  awayScores = [];

  constructor(private _matches: MatchesService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this._matches.matchesHistory().subscribe((res) => {
      // TODO clean up the typing here. I'm not sure why Angular is not natively treating res as an array.
      this.allDates = (res as []).map((res) => res['date']);
      this.homeScores = (res as []).map((res) => res['home_score']);
      console.log(this.allDates);
      console.log(this.homeScores);
      this.chart = new Chart('lineChart', {
        type: 'line',
        data: {
          labels: this.allDates,
          datasets: [
            {
              data: this.homeScores,
              borderColor: '#3e95cd',
              fill: false,
              label: 'Home Score',
            },
          ],
        },
      });
    });
  }
}
