import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-estudo-app';
  name: string = 'Angular';
  buttonLabel: string = 'Carrinho'
  buttonSecond: string = 'Adicionar aos favoritos'
}
