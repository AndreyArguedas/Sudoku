import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//Everything in the project will have to be imported into this file
/*  
    Declarations:
      Components
    Imports:
      Modules
        Form Modules 
        Http Modules
    Providers:
      Services
    Bootstrap:
      Only root component
*/