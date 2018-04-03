import {Component} from "@angular/core";
import { DataService } from '../data.service';

@Component({
    selector:'pagam',
    templateUrl:'./pagam.component.html',
    styleUrls:['./pagam.component.css']

}) export class PagamComponent{

    constructor(private dataService: DataService) { }

    images = [
        { 'Name': 'VISA', 'Path': '../images/Visa.svg' },
        { 'Name': 'MASTERCARD', 'Path': '../images/Mastercard.svg' }
    ]

    ngOnInit() {
    }

}
