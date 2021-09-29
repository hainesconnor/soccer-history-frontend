import { Chart, registerables } from 'chart.js';
import { Component, OnInit } from '@angular/core';

import { MatchesService } from 'src/app/matches.service';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css'],
})
export class BarGraphComponent implements OnInit {
  graph: any = [];
  teams = [];
  matchesPlayed = [];
  limit = 10;

  constructor(private _matches: MatchesService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this._matches.mostMatchesPlayed(this.limit).subscribe((res) => {
      this.teams = (res as []).map((res) => res['country']);
      this.matchesPlayed = (res as []).map((res) => res['matches_played']);

      // Configure graph
      this.graph = new Chart('barGraph', {
        type: 'bar',
        data: {
          labels: this.teams,
          datasets: [
            {
              data: this.matchesPlayed,
              label: 'Matches Played All Time',
              backgroundColor: '#3e95cd',
            },
          ],
        },
      });
    });
  }
}
