import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  LogInForm(): void {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    if () {

    } else {

    }
  }
  error(): void{
    this._snackBar.open("Username or password are wrong", '', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    })
  }
}
