import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-anfrage',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './anfrage.component.html',
  styleUrl: './anfrage.component.css'
})
export class AnfrageComponent {
  form: FormGroup;
  submitted = false;
  success = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      dogName: ['', Validators.required],
      dogBreed: [''],
      package: ['60', Validators.required],
      message: ['', Validators.required]
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;

    // In real life: send to backend / email service
    console.log('Anfrage:', this.form.value);
    this.success = true;
    this.form.reset({ package: '60' });
    this.submitted = false;
  }
}
