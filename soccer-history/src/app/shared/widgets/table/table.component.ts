import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatchesService } from 'src/app/matches.service';

interface Match {
  date?: string;
  home_team?: string;
  away_team?: string;
  home_score?: string;
  away_score?: string;
  tournament?: string;
  city?: string;
  coutnry?: string;
  netural?: boolean;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  ELEMENT_DATA!: Match[];
  displayedColumns: string[] = [
    'date',
    'home_team',
    'away_team',
    'home_score',
    'away_score',
    'tournament',
    'city',
    'country',
    'neutral',
  ];
  dataSource = new MatTableDataSource<Match>(this.ELEMENT_DATA);

  loadedCountries!: string[];
  selectedCountry: string = 'All';

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private _matches: MatchesService) {
    (this.dataSource.filterPredicate as any) = (data: any, filter: string) => {
      return (
        data.home_team?.toLowerCase().includes(filter) ||
        data.away_team?.toLowerCase().includes(filter)
      );
    };
  }

  ngOnInit(): void {
    this.loadedCountries = ['usa', 'eng'];
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getMatches();
  }

  getMatches() {
    this._matches.matchesHistory().subscribe((res) => {
      this.dataSource.data = res as Match[];
    });
  }

  updateMatches() {
    this._matches
      .matchesHistoryByCountry(this.selectedCountry)
      .subscribe((res) => {
        this.dataSource.data = res as Match[];
      });
  }

  applyFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
  }
}
