import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  exform: FormGroup;

  ngOnInit() {

  this.exform = new FormGroup({
    'name' : new FormControl(null, Validators.required),
    'email' : new FormControl(null, [Validators.required, Validators.email]),
    'phone' : new FormControl(
      null,
      [
        Validators.required,
        Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
      ]),
    'message' : new FormControl(null, [Validators.required, Validators.minLength(10)])
  });
  }

  clicksub() {
    console.log(this.exform.value);
    this.exform.reset();
  }
  get id() {
    return this.exform.get('id');
  }
  get name() {
    return this.exform.get('name');
  }
  get email() {
    return this.exform.get('email');
  }
  get salary() {
    return this.exform.get('salary');
  }
  get phone() {
    return this.exform.get('phone');
  }
  get address() {
    return this.exform.get('address');
  }
  get message() {
    return this.exform.get('message');
  }

}
