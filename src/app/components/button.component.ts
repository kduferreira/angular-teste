import { Component, Input } from '@angular/core'

@Component({
 selector: 'my-button',
 templateUrl: './button.component.html',
 styleUrls: ['./button.component.css'],


})

export class ButtonComponent{
    @Input() label: string = '';
    buttonText: string = 'Acesar'; //interpolacao de dados. a classe buttonComponent é responsavel pela parte inteligente do component, entao as outras partes que compoem o componente tem acesso as propriedades da classe

    buttonTexts: string[] = ["Vender", "Comprar"];
    buttonNumber: number = 1;
    buttonObject = {
        label: 'Adicionar ao carrinho',
    }
    getAlert(num:number){
        alert(num);
    }
}