import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlComponent } from './url/url.component';
import { TopFrequentComponent } from './top-frequent/top-frequent.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlComponent,
    TopFrequentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
