import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { DoctorComponent } from './doctor.component';
import { DoctorRoutingModule } from './doctor-routing.module';

/**
 * AppModule
 * @export
 * @class AppModule
 */
@NgModule({
  declarations: [
    DoctorComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DoctorRoutingModule
  ],
  exports: [ DoctorComponent ]
})

export class DoctorModule { }
