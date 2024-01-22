import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@NgModule({
  declarations: [
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent,
    ReactiveFormsModule,
    CommonModule,
    FormsModule, 
    OrderHistoryComponent,
  ],
  bootstrap: [],
  providers: [],
})
export class AppModule {}

