import { Routes, RouterModule,PreloadAllModules } from "@angular/router";

import { PagamComponent } from "./pagam/pagam.component";
import { CardPaymentComponent } from "./cardpayment/cardpayment.component";
import { DataSummaryComponent } from "./datasummary/datasummary.component";
import { ReceiptComponent } from "./receipt/receipt.component";

const appRoute: Routes = [{ path: 'cardpayment', component: CardPaymentComponent },
    { path: '', component: PagamComponent },
    { path: 'datasummary', component: DataSummaryComponent },
    { path: 'receipt', component: ReceiptComponent }
];

export const CONST_STRING = RouterModule.forRoot(appRoute, { preloadingStrategy: PreloadAllModules });

export class RouterComponent{
}
