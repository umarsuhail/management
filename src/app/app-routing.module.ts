import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VisitorsComponent } from './visitors/visitors.component';
import { HostersComponent } from './hosters/hosters.component';
import { EventsComponent } from './events/events.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'visitors', component: VisitorsComponent },
  { path: 'Hosters', component: HostersComponent},
  { path: 'events', component: EventsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
