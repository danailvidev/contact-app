import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { IContactDTO } from '../shared/interfaces';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'contacts-grid',
    templateUrl: './contacts-grid.component.html',
    styles: [`.avatar img {max-width: 30px; border-radius: 50%;}`],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsGridComponent implements OnInit {

    @Input() contacts: IContactDTO[] = [];

    constructor() { }

    ngOnInit() {
    }

}
