"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var pagam_component_1 = require("./pagam/pagam.component");
var cardpayment_component_1 = require("./cardpayment/cardpayment.component");
var datasummary_component_1 = require("./datasummary/datasummary.component");
var receipt_component_1 = require("./receipt/receipt.component");
var appRoute = [{ path: 'cardpayment', component: cardpayment_component_1.CardPaymentComponent },
    { path: '', component: pagam_component_1.PagamComponent },
    { path: 'datasummary', component: datasummary_component_1.DataSummaryComponent },
    { path: 'receipt', component: receipt_component_1.ReceiptComponent }
];
exports.CONST_STRING = router_1.RouterModule.forRoot(appRoute, { preloadingStrategy: router_1.PreloadAllModules });
var RouterComponent = /** @class */ (function () {
    function RouterComponent() {
    }
    return RouterComponent;
}());
exports.RouterComponent = RouterComponent;
//# sourceMappingURL=app.route.js.map