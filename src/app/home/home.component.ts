import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'home',
    templateUrl: './home.component.html',
    styles: [`md-card { margin: 15px 0; }`]
})
export class HomeComponent implements OnInit {
    title: string;

    constructor(private router: Router,
    ) { }

    ngOnInit() {
        this.title = 'Home';
    }
}
