import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService, CountryService, AddressService } from '../core/index';
import { IContactDTO, IAddressDTO, ICountryDTO } from '../shared/interfaces';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'contact-edit',
    templateUrl: './contact-edit.component.html',
    styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
    addressForm: FormGroup;
    contact: IContactDTO = {
        id: null,
        first_name: '',
        last_name: '',
        avatar: ''
    };
    address: IAddressDTO = {
        street1: '',
        street2: '',
        town: '',
        country: '',
        contactId: '',
        id: null
    };
    errorMessage: string;
    addresses: any;
    userId: any;
    userAddresses: IAddressDTO[] = [];
    countries: ICountryDTO[] = [];

    constructor(private router: Router,
        private route: ActivatedRoute,
        private contactService: ContactService,
        private countryService: CountryService,
        private addressService: AddressService,
        private location: Location,
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.userId = this.route.snapshot.params['id'];
        if (this.userId !== '0') {
            this.getContact(this.userId);
        }
        this.getAddresses();
        this.buildForm();
        this.getCountries();
    }

    getContact(id: Number) {
        this.contactService.getContact(id)
            .subscribe((contact: IContactDTO) => {
                this.contact = contact;
            },
            (err: any) => console.log(err));
    }

    buildForm() {
        this.addressForm = this.formBuilder.group({
            street1: [this.address.street1, Validators.required],
            street2: [this.address.street2, Validators.required],
            town: [this.address.town, Validators.required],
            country: [this.address.country, Validators.required],
            contactId: [],
        });
    }

    getAddresses() {
        this.addressService.getAddresses().subscribe((addresses: IAddressDTO[]) => {
            this.addresses = addresses;
            this.getContactAddresses();
        });
    }

    getContactAddresses() {
        this.addresses.forEach(address => {
            // tslint:disable-next-line:triple-equals
            if (address.contactId == this.userId) {
                this.userAddresses.push(address);
            }
        });
    }

    getCountries() {
        this.countryService.getCountries().subscribe((countries: ICountryDTO[]) => {
            this.countries = countries;
        });
    }

    submit({ value, valid }: { value: IAddressDTO, valid: boolean }) {
        value.contactId = this.userId || this.route.snapshot.params['id'];
        this.addressService.insertAddress(value)
            .subscribe((res) => {
                if (res) {
                    this.userAddresses = [];
                    this.addressForm.reset();
                    this.getAddresses();
                } else {
                    alert('something went wrong');
                }
            });
    }

    cancel() {
        this.location.back();
    }

    deleteAddress(id) {
        this.addressService.deleteAddress(id)
            .subscribe((res) => {
                if (res) {
                    this.userAddresses = [];
                    this.getAddresses();
                } else {
                    alert('cannot delete the address');
                }
            });
    }

    test() {
        console.log();
    }

    onKey(ev) {
        console.log(ev);
    }

    submit2(ev) {
        console.log(ev);
    }
 }
