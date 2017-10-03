import { ModuleWithProviders } from '@angular/core';

export interface IContactDTO {
    id?: Number;
    first_name: string;
    last_name: string;
    avatar?: string;
}

export interface IRouting {
    routes: ModuleWithProviders;
    components: any[];
}

export interface IAddressDTO {
    street1: string;
    street2: string;
    town: string;
    country: string;
    contactId: string;
    id?: Number;
}

export interface ICountryDTO {
    iso2: string;
    name: string;
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}
