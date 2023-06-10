import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/pages/dashboard/dashboard.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatDividerModule} from "@angular/material/divider";
import {DashboardService} from "./dashboard/service/dashboard.service";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import { ManagerProfileComponent } from './manager-profile/pages/manager-profile/manager-profile.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatLegacyListModule} from "@angular/material/legacy-list";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManagerProfileComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    MatDividerModule,
    RouterOutlet,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    MatCardModule,
    MatListModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
