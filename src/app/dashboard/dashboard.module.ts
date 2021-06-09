import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';




@NgModule({
  declarations: [
    DashboardPageComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,

  ],

})
export class DashboardModule { }
