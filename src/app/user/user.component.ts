import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

userForm = this.fb.group({
  nomUtilisat: [''],
  credentials: this.fb.group({
    email: [''],
    motDePasse: ['']
  }),
  rue: [''],
  codePostal: [''],
  ville: ['']
});

  
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    //form submitted
    console.log(this.userForm.value)
  }
}
