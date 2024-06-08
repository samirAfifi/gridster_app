import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GridsterModule } from 'angular-gridster2';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OverViewComponent } from './components/over-view/over-view.component';
import { AudienceComponent } from './components/audience/audience.component';
import { ErrorComponent } from './components/error/error.component';
import { GridstarComponent } from './components/gridstar/gridstar.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuickComponent } from './components/quick/quick.component';
import { OverallComponent } from './components/overall/overall.component';
import { RationComponent } from './components/ration/ration.component';
import { RealTimeComponent } from './components/real-time/real-time.component';
import { MapComponent } from './components/map/map.component';
import { ScrollComponent } from './components/scroll/scroll.component';
import { PresentationComponent } from './components/presentation/presentation.component';





CommonModule
@NgModule({
  declarations: [
    AppComponent,
   
    NavbarComponent,
    DashboardComponent,
    OverViewComponent,
    AudienceComponent,
    ErrorComponent,
    GridstarComponent,
    PerformanceComponent,
    QuickComponent,
    OverallComponent,
    RationComponent,
    RealTimeComponent,
    MapComponent,
    ScrollComponent,
    PresentationComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridsterModule,
    CommonModule,
    FormsModule,
    HighchartsChartModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
