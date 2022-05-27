import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { TileComponent } from './components/shared/tile/tile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectsComponent } from './components/projects/projects.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ReportsOverviewComponent } from './components/reports-overview/reports-overview.component';
import { ReportsDatatableComponent } from './components/reports-datatable/reports-datatable.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    HeaderComponent,
    SidebarComponent,
    TileComponent,
    ProjectsComponent,
    TemplatesComponent,
    ReportsComponent,
    ReportsOverviewComponent,
    ReportsDatatableComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }