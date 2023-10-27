import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button.component';
import { MenuComponent } from './components/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
