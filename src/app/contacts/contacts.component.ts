import { Component, OnInit } from '@angular/core';

import { ContactService } from '../core/index';
import { IContactDTO, IPagedResults } from '../shared/interfaces';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dv-contacts',
    templateUrl: './contacts.component.html',
    styles: [`form {padding: 15px;}`]
})
export class ContactsComponent implements OnInit {
    title: string;
    contacts: IContactDTO[] = [];
    totalRecords: Number;
    contact: IContactDTO = {
        first_name: '',
        last_name: '',
        avatar: '',
    };

    constructor(
        private contactService: ContactService
    ) { }

    ngOnInit() {
        this.title = 'Contact List';
        this.getContacts();
    }

    getContacts() {
        this.contactService.getContacts()
            .subscribe((response: IPagedResults<IContactDTO[]>) => {
                this.contacts = response.results;
                this.totalRecords = response.totalRecords;
            },
            (err: any) => console.log(err),
            () => console.log('getContacts() retrieved contacts'));
    }

    insertContact(userInput) {
        const name = userInput.value.split(' ');
        this.contact.first_name = name[0];
        this.contact.last_name = name[1];
        this.contact.avatar = '';
        this.contactService.insertContact(this.contact)
            .subscribe((res) => {
                if (res) {
                    this.getContacts();
                } else {
                    console.log('something went wrong');
                }
            });
        userInput.value = '';
    }
}
