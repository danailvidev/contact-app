import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IContactDTO, IPagedResults } from '../shared/interfaces';
import {environment} from '../../environments/environment';

@Injectable()
export class ContactService {
    baseUrl = environment.appApi.baseUrl + '/contacts';

    constructor(private http: Http) {

    }

    getContacts(): Observable<IPagedResults<IContactDTO[]>> {
        return this.http.get(this.baseUrl)
            .map((res: Response) => {
                const contacts = res.json();
                const totalRecords = contacts.length;
                return {
                    results: contacts,
                    totalRecords: totalRecords
                };
            })
            .catch(this.handleError);

    }

    getContact(id: Number): Observable<IContactDTO> {
        return this.http.get(this.baseUrl + '/' + id)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    insertContact(contact: IContactDTO): Observable<boolean> {
        const body = JSON.stringify(contact);
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

    deleteContact(id: Number): Observable<boolean> {
        return this.http.delete(this.baseUrl + '/' + id)
            .map((res: Response) => res.json().status)
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
