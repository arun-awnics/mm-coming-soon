import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { DoctorService } from '../shared/doctor.service';
import { Doctor } from '../shared/doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  doctor: FormGroup;
  newDoctor: Doctor;
  msg = '';

  constructor(private fb: FormBuilder, private doctorService: DoctorService) {
    this.doctor = this.fb.group({
      name: ['', Validators.required],
      regNo: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]
      // termsAccepted: ['', Validators.required]
    });
  }

  onSubmit({ value, valid }: {value: Doctor, valid: boolean}) {
    let doctor;
    if (valid === true) {
      this.doctorService.create(value)
      .subscribe((res) => {doctor = res; console.log(doctor); });
      this.doctor.reset();
      this.msg = 'Registration successful';
    } else {
      this.msg = 'Registration unsuccessful';
    }
  }
}
