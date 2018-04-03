import { Component } from "@angular/core";
import { DataService } from '../data.service';
import { Card } from '../data.service';

@Component({
    selector:'datasummary',
    templateUrl:'./datasummary.component.html',
    styleUrls:['./datasummary.component.css']
})

export class DataSummaryComponent{

    card: Card;

    constructor(private dataService: DataService) {
        this.card = dataService.card;
    }
        

}