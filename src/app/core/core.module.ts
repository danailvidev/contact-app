import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AddressService, ContactService, CountryService } from './index';

import { EnsureModuleLoadedOnceGuard } from '../shared/module-import-guard';

@NgModule({
  imports: [HttpModule, HttpClientModule],
  providers: [
    AddressService, ContactService, CountryService
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
