import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {

    testresponse: string;
    card: Card;

    callAPI() {
        let promise = new Promise((resolve, reject) => {
            let apiURL = 'http://localhost:52650/Pagam/TestAPI';
            this.http.get(apiURL, { headers: httpOptions.headers })
                .toPromise()
                .then(
                    res => { // Success
                        this.testresponse = res.toString();
                        //console.log(this.testresponse);
                        resolve(this.testresponse);
                    },
                    msg => { // Error
                        reject(msg);
                    }
                );
        });
        return promise;
    }

    constructor(private http: HttpClient) {

        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
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

        this.callAPI().then((val) => console.log(val),
            (err) => console.error(err)
        );

       // console.log(this.testresponse);
    }

   
    
}

export class Card {
    creditCardNumber: number;
    cvv: number;
    month: number;
    year: number;
    name: string;
    email: string;
}

export class Merchant {
    ShopLogin: string;
}

export class Transaction {
    Amount: number;
    Result: string;
}



