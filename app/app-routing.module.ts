import { VisitordashComponent } from './visitordash/visitordash.component';
import { HostdashComponent } from './hostdash/hostdash.component';
import { EventdashComponent } from './eventdash/eventdash.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VisitorsComponent } from './visitors/visitors.component';
import { HostersComponent } from './hosters/hosters.component';
import { EventsComponent } from './events/events.component';
const routes: Routes = [
  { path: 'visitors', component: VisitorsComponent },
  { path: 'Hosters', component: HostersComponent},
  { path: 'events', component: EventsComponent},
  { path: 'event-dashboard', component: EventdashComponent},
  { path: 'host-dashboard', component: HostdashComponent},
  { path: 'Visitors-dashboard', component: VisitordashComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
