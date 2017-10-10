import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    DoctorRoutingModule,
    CommonModule
  ],
  exports: [ DoctorComponent ]
})

export class DoctorModule { }
