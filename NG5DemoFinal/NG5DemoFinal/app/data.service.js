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
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/toPromise");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        var httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        //this.http.get('http://localhost:52650/Pagam/TestAPI', { headers: httpOptions.headers }).subscribe(data =>
        //{
        //    console.log(data);
        //    this.testresponse = data.toString();
        //},
        //    err => console.error(err),
        //    () => console.log('done loading foods')
        //);
        //console.log(this.testresponse);
        //alert('test-https://172.17.4.63/GestPayREST/get');
        this.callAPI().then(function (val) { return console.log(val); }, function (err) { return console.error(err); });
        // console.log(this.testresponse);
    }
    DataService.prototype.callAPI = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = 'http://localhost:52650/Pagam/TestAPI';
            _this.http.get(apiURL, { headers: httpOptions.headers })
                .toPromise()
                .then(function (res) {
                _this.testresponse = res.toString();
                //console.log(this.testresponse);
                resolve(_this.testresponse);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
var Card = /** @class */ (function () {
    function Card() {
    }
    return Card;
}());
exports.Card = Card;
var Merchant = /** @class */ (function () {
    function Merchant() {
    }
    return Merchant;
}());
exports.Merchant = Merchant;
var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    return Transaction;
}());
exports.Transaction = Transaction;
//# sourceMappingURL=data.service.js.map