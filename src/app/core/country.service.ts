import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IContactDTO, IPagedResults, IAddressDTO, ICountryDTO } from '../shared/interfaces';
import {environment} from '../../environments/environment';

@Injectable()
export class CountryService {
    baseUrl = environment.appApi.baseUrl + '/countries';

    constructor(private http: Http) {

    }

    getCountries(): Observable<ICountryDTO[]> {
        return this.http.get(this.baseUrl)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('server error:', error);
        if (error instanceof Response) {
            let errMessage = '';
            try {
                errMessage = error.json().error;
            } catch (err) {
                errMessage = error.statusText;
            }
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'json server error');
    }
}
