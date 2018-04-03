"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("../data.service");
var PagamComponent = /** @class */ (function () {
    function PagamComponent(dataService) {
        this.dataService = dataService;
        this.images = [
            { 'Name': 'VISA', 'Path': '../images/Visa.svg' },
            { 'Name': 'MASTERCARD', 'Path': '../images/Mastercard.svg' }
        ];
    }
    PagamComponent.prototype.ngOnInit = function () {
    };
    PagamComponent = __decorate([
        core_1.Component({
            selector: 'pagam',
            templateUrl: './pagam.component.html',
            styleUrls: ['./pagam.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], PagamComponent);
    return PagamComponent;
}());
exports.PagamComponent = PagamComponent;
//# sourceMappingURL=pagam.component.js.map