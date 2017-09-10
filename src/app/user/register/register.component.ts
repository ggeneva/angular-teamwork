import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../providers/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userSignUpFrom: FormGroup;

  formErrors = {
    'email': '',
    'password': '',
    'firstName': '',
    'lastName': ''
  };

  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'pattern': 'Email format is invalid'
    },
    'password': {
      'required': 'Password is required.',
      'minlength': 'Password must be at least 5 characters long.',
      'maxlength': 'Password cannot be more than 20 characters long.',
    },
    'firstName': {
      'required': 'First name is required.',
      'minlength': 'First name must be at least 4 characters long',
      'maxlength': 'First name cannot be more than 20 characters long.',
    },
    'lastName': {
      'required': 'Last name is required.',
      'minlength': 'Last name must be at least 4 characters long',
      'maxlength': 'Last name cannot be more than 20 characters long.',
    }
  };
  public user: User = new User();

  constructor(private userService: UserService, private router: Router,
    private fb: FormBuilder) {
    this.buildForm();
  }
  buildForm(): void {
    this.userSignUpFrom = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
      ]
      ],
      'password': ['', [
        Validators.minLength(5),
        Validators.maxLength(20)
      ]
      ],
      'firstName': ['', [
        Validators.minLength(4),
        Validators.maxLength(20)
      ]
      ],
      'lastName': ['', [
        Validators.minLength(4),
        Validators.maxLength(20)
      ]
      ]
    });

    this.userSignUpFrom.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

  ngOnInit() {
  }

  registerUser() {
    this.user.displayName = this.userSignUpFrom.value['firstName'] + ' ' + this.userSignUpFrom.value['lastName'];
    this.user.email = this.userSignUpFrom.value['email'];
    this.userService.registerUserWithEmail(this.user, this.userSignUpFrom.value['password'])
      .catch((error) => {
        console.log(error);
      })
      .then((result) => {
        this.router.navigate(['']);
      });
  }

  onValueChanged(data?: any) {
    if (!this.userSignUpFrom) {
      return;
    }
    const form = this.userSignUpFrom;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (this.formErrors.hasOwnProperty(field)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
}
