import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm: FormGroup;
  submitted = false;
  error = '';

  constructor(private authService: AuthenticationService, private formBuilder: FormBuilder, private router: Router) {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  get formControls() { return this.signupForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.error = '';

    if (this.signupForm.invalid) {
      return;
    }

    this.authService.signup(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.name)
      .subscribe(
        data => {
          // Handle successful login here
          console.log('SignUp successful', data);
          this.router.navigate(['/']);
        },
        error => {
          this.error = 'Invalid information';
          console.error('SignUp error:', error);
        }
      );
  }
}
