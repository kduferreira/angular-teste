import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button.component';
import { MenuComponent } from './components/menu.component';
import { EntryComponent } from './components/entry-data.component';

@NgModule({
  declarations: [
    EntryComponent,
    AppComponent,
    ButtonComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
