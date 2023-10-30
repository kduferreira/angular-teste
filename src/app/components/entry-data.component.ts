import { Component } from "@angular/core";

@Component({
    selector: 'entry-data',
    templateUrl: './entry-data.component.html',
    styleUrls: ['entry-data.component.css'],
})

export class EntryComponent{
    placeHolder: string = "email";
    placePassword: string = "password";
    color:string = "grey";
}