import { Component } from "@angular/core";
import { DataService } from '../data.service';
import { Card } from '../data.service';

@Component({
    selector: 'cardpayment',
    templateUrl: './cardpayment.component.html',
    styleUrls: ['./cardpayment.component.css']
})
export class CardPaymentComponent {
    card: Card = new Card();
    //creditCardNumber: number = 12321;

    constructor(private dataService: DataService) {
    }
    
    ngOnInit() {
    }

    saveCard() {
        //this.card.creditCardNumber = this.creditCardNumber;
        this.dataService.card = this.card;
    }

}
