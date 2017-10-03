import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdTooltipModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material';
import {MatSelectModule} from '@angular/material';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdTooltipModule,
    MatListModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  declarations: [],
  exports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdTooltipModule,
    MatListModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
