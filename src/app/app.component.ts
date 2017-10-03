import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styles: [`md-sidenav {
    min-width: 200px;
}
md-nav-list a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 5px 5px 15px;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    color: #000;
}
md-nav-list a:hover {
    background: #3F51B5;
    color: #fff;
}
.app-content {
    padding: 15px;
}
h3 {
    text-align: center;
}`]
})
export class AppComponent {
  tooltipPosition = 'right';
}
