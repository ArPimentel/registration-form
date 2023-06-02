import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupForm: FormGroup;
  successMessage: string = '';
  user: User = new User('', '', '', '');

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.successMessage = 'The form has been successfully submitted!';
      this.signupForm.reset();
    } else {
    }
  }
  resetForm() {
    this.signupForm.reset();
    this.successMessage = '';
  }
}
