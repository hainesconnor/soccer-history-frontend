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
  numberOfMatches = [];

  constructor(private _matches: MatchesService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this._matches.matchesPerYear().subscribe((res) => {
      this.allDates = (res as []).map((res) => res['year']);
      this.numberOfMatches = (res as []).map((res) => res['number_of_matches']);
      // Remove current year
      let dates = this.allDates.slice(0, -1);
      let matches = this.numberOfMatches.slice(0, -1);
      // Configure chart
      this.chart = new Chart('lineChart', {
        type: 'line',
        data: {
          labels: dates,
          datasets: [
            {
              data: matches,
              borderColor: '#3e95cd',
              fill: false,
              label: 'Number of International Soccer Matches',
            },
          ],
        },
      });
    });
  }
}
