import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Contact } from './contact';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * Service to call email api from the server
 * @export
 * @class MailService
 */
@Injectable()
export class MailService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private url = 'http://146.148.47.134:3000/mailApi/controllers/sendMail';

    sendMail (body: Object): Observable<string> {
        const bodyString = JSON.stringify(body); // Stringify payload
        const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        const options = new RequestOptions({ headers: headers }); // Create a request option
        return this.http.post(this.url, body, options) // ...using post request
                         .map((res: Response) => res.text()) // ...and calling .text() on the response to return data
                         .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }
}
