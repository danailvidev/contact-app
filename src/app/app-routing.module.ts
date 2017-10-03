import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './contacts/contacts.component';
import { ContactsGridComponent } from './contacts/contacts-grid.component';
import { ContactEditComponent } from './contacts/contact-edit.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: 'contacts', component: ContactsComponent },
    { path: 'contacts/:id', component: ContactEditComponent},
    { path: 'home', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    static components = [ContactsComponent, HomeComponent, ContactsGridComponent, ContactEditComponent];
}
