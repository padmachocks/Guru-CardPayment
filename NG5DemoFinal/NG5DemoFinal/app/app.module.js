"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var pagam_component_1 = require("./pagam/pagam.component");
var cardpayment_component_1 = require("./cardpayment/cardpayment.component");
var datasummary_component_1 = require("./datasummary/datasummary.component");
var receipt_component_1 = require("./receipt/receipt.component");
var header_component_1 = require("./header/header.component");
var forms_1 = require("@angular/forms");
var app_route_1 = require("./app.route");
var data_service_1 = require("./data.service");
var http_1 = require("@angular/common/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpClientModule, app_route_1.CONST_STRING],
            declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, pagam_component_1.PagamComponent, cardpayment_component_1.CardPaymentComponent, datasummary_component_1.DataSummaryComponent, receipt_component_1.ReceiptComponent],
            providers: [data_service_1.DataService,],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map