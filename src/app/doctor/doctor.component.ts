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
  number = [];

  constructor(private fb: FormBuilder, private doctorService: DoctorService) {
    this.doctor = this.fb.group({
      name: ['', Validators.required],
      regNo: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      speciality: ['', Validators.required],
      experience: ['', Validators.required],
      description: ['', Validators.required],
      termsAccepted: ['', Validators.required]
    });
    this.generateNumber();
  }

  generateNumber() {
    for (let i = 0; i <= 50; i++ ) {
      this.number.push(i);
    }
  }

  onSubmit({ value, valid }: {value: Doctor, valid: boolean}) {
    if (valid === true) {
      this.doctorService.create(value)
      .subscribe((res) => {this.msg = 'Registration successful!'; });
      this.doctor.reset();
      setTimeout(() => {
        document.getElementById('msg').style.display = 'none';
      }, 5000);
    } else {
      this.msg = 'Registration unsuccessful. Please try again later!';
      setTimeout(() => {
        document.getElementById('msg').style.display = 'none';
      }, 10000);
    }
  }
}
