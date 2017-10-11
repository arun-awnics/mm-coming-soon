import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Doctor } from './doctor';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * Service to call register doctor from the server
 * @export
 * @class DoctorService
 */
@Injectable()
export class DoctorService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private url = 'http://146.148.47.134:3000/api/doctorPost';

    create (body: Object): Observable<Doctor[]> {
        const bodyString = JSON.stringify(body); // Stringify payload
        const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        const options = new RequestOptions({ headers: headers }); // Create a request option
        return this.http.post(this.url, body, options) // ...using post request
                         .map((res: Response) => res.json() as Doctor) // ...and calling .json() on the response to return data
                         .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }
}
