import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CredentialService} from "../../services/credential.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private credentialService: CredentialService) { }


  loginUser() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.credentialService.fetchCredentialByEmail(formData.email).subscribe((response: any) => {
        if (!response) {
          console.log("User doesn't exist or something went wrong");
          return;
        }
        if (formData.password === response.password) {
          if (response.role === 'candidate') {
            this.router.navigate(['/']);
          } else if (response.role === 'employer') {
            if (response.userLevel === "1") {
              this.router.navigate(['/dashboard']);
            }
            else if (response.userLevel === "2") {
              this.router.navigate(['/pro']);
            }
          }
        } else {
          console.log("Password is incorrect");
        }
      }, error => {
        console.log(error);
      });
    } else {
      console.log("Form is invalid");
    }
  }
}
