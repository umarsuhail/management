import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AvatarModule } from 'ngx-avatar';
import { VisitorsComponent } from './visitors/visitors.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule, } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { HostersComponent } from './hosters/hosters.component';
import { EventsComponent } from './events/events.component';
import { MatMenuModule } from '@angular/material/menu';
import { EventdashComponent } from './eventdash/eventdash.component';
import { VisitordashComponent } from './visitordash/visitordash.component';
import { HostdashComponent } from './hostdash/hostdash.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideDrawComponent } from './side-draw/side-draw.component';
import { MdcDrawerModule, MdcListModule } from '@angular-mdc/web';
import { GroupListComponent } from './group-list/group-list.component';
import { MdcElevationModule } from '@angular-mdc/web';
import {
  MdcButtonModule,
  MdcFabModule,
  MdcIconModule,
} from '@angular-mdc/web';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VisitorsComponent,
    HostersComponent,
    EventsComponent,
    EventdashComponent,
    VisitordashComponent,
    HostdashComponent,
    SideDrawComponent,
    GroupListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule,
    RouterModule,
    AppRoutingModule,
    AvatarModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MdcDrawerModule,
    MdcButtonModule,
    MdcFabModule,
    MdcIconModule,
    MdcElevationModule,
    MdcListModule

  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
