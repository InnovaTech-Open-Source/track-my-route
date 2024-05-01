
// src/app/login/login.component.ts
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-register',
  standalone:true,
  imports: [MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  RegisterForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    remember: false
  });
  hide = true;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.RegisterForm.valid) {
      console.log('Form data', this.RegisterForm.value);
      // Implement your login logic here
    }
  }
}
