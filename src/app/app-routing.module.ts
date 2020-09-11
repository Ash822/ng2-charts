import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DayViewComponent } from './components/day-view/day-view.component';
import { DowWidgetComponent } from './components/dow-widget/dow-widget.component';

const routes: Routes = [
  { path: 'dow-widget', component: DowWidgetComponent },
  { path: 'day-view', component: DayViewComponent },
  { path: '**', component: DowWidgetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
