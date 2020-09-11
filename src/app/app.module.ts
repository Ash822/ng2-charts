import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { DowWidgetComponent } from './components/dow-widget/dow-widget.component';
import { DayViewComponent } from './components/day-view/day-view.component';
import { RouteWidgetComponent } from './components/route-widget/route-widget.component';

@NgModule({
  declarations: [AppComponent, DowWidgetComponent, DayViewComponent, RouteWidgetComponent],
  imports: [BrowserModule, AppRoutingModule, ChartsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
