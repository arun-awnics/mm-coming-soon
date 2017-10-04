import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { TimerService } from './shared/time.service';
import { MailService } from './shared/mail.service';
import { Contact } from './shared/contact';

/**
 * AppComponent
 * @export
 * @class AppComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  time: any;
  newContact: FormGroup;
  msg = '';

  constructor(private timerService: TimerService, private fb: FormBuilder, private mailService: MailService) {
    this.newContact = this.fb.group({
      email: ['', Validators.email],
      comment: [''],
      subject: [''],
      name: ['']
    });
   }

  /**
   * Sets time to countdown
   * @memberof AppComponent
   */
  ngOnInit() {
    this.time = this.timerService.timer(new Date('Jan 1, 2018 00:00:00'));
  }

  /**
   * on submit of the email id, checks if the email id is valid or not.
   * @param {any} {value, valid}
   * @memberof AppComponent
   */
  onSubmit({value, valid}) {
    if (valid === true) {
      value.comment = 'There is a new request for newsletter subscription.';
      value.name = null;
      value.subject = 'Mail subscription by ' + value.email;
      this.mailService.sendMail(value)
      .subscribe((res) => {this.msg = res; });
      this.newContact.reset();
      document.getElementById('emailError').style.display = 'none';
      document.getElementById('alert').style.display = 'block';
      setTimeout(function() {
        document.getElementById('alert').style.display = 'none';
      }, 5000);
    } else {
      document.getElementById('emailError').style.display = 'block';
    }
  }
}
