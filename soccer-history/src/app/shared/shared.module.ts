import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartComponent } from './widgets/chart/chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { MatchesService } from '../matches.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './widgets/table/table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BarGraphComponent } from './widgets/bar-graph/bar-graph.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ChartComponent,
    TableComponent,
    BarGraphComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HighchartsChartModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ChartComponent,
    TableComponent,
    BarGraphComponent,
  ],
  providers: [MatchesService],
})
export class SharedModule {}
