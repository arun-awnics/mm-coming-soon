import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'doctor', component: DoctorComponent }
    ])
  ],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
