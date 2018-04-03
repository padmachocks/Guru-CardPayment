import { Component, OnInit,Input } from "@angular/core";

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
}) export class HeaderComponent {
    
    merchantName = "";
    amount = 0;
    currency = "";

}