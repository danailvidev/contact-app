import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IPagedResults, IAddressDTO } from '../shared/interfaces';
import {environment} from '../../environments/environment';

@Injectable()
export class AddressService {
    baseUrl = environment.appApi.baseUrl + '/addresses';

    constructor(private http: Http) {

    }

    getAddresses(): Observable<IAddressDTO[]> {
        return this.http.get(this.baseUrl)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    deleteAddress(id): Observable<boolean> {
        return this.http.delete(this.baseUrl + '/' + id)
            .map(res => {
                if (res.ok) {
                    return true;
                }
                return false;
            })
            .catch(this.handleError);
    }

    updateAddress(address: IAddressDTO): Observable<boolean> {
        return this.http.put(this.baseUrl + '/' + address.id, address)
            .map((res: Response) => {
                const data = res.json();
                console.log('updateAddress status: ' + data.status);
                return data;
            })
            .catch(this.handleError);
    }

    insertAddress(address: IAddressDTO): Observable<boolean> {
        const body = JSON.stringify(address);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl, body, options)
            .map(res => {
                if (res.ok) {
                    return true;
                }
                return false;
            })
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
