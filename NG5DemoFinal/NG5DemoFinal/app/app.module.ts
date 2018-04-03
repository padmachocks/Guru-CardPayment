import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PagamComponent } from "./pagam/pagam.component";
import { CardPaymentComponent } from "./cardpayment/cardpayment.component";
import { DataSummaryComponent } from "./datasummary/datasummary.component";
import { ReceiptComponent } from "./receipt/receipt.component";
import { HeaderComponent } from "./header/header.component"
import { FormsModule } from '@angular/forms';

import { CONST_STRING } from "./app.route"

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, CONST_STRING],
    declarations: [AppComponent, HeaderComponent, PagamComponent, CardPaymentComponent, DataSummaryComponent, ReceiptComponent],
    providers: [DataService, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
