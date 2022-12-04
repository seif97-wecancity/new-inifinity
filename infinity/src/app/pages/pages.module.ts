import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Page Routing
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './dashboard/home/home/home.component';


@NgModule({
  declarations: [

  
    
  
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ]
  
})
export class PagesModule { }
