import { NgModule, ModuleWithProviders } from '@angular/core';

import { NavbarComponent } from './navbar.component';

/**
 * contains all the modules that are shared in the app
 * @export
 * @class SharedModule
 */
@NgModule({
  declarations: [NavbarComponent],
  imports: [],
  exports: [NavbarComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
