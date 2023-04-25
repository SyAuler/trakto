import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm!: FormGroup;
    errorMessage!: string;
    loadingSubmit: boolean = false;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
    ) { }

    ngOnInit() {
        this.initForm()
    }

    initForm() {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        })
    }

    login() {
        if (this.loginForm.invalid) {
            return;
        }
        this.loadingSubmit = true;
        const { email, password } = this.loginForm.value;
        this.authService.login(email, password).subscribe(
            () => {
                this.loadingSubmit = false;
            },
            () => {
                this.loadingSubmit = false;
                this.email.setErrors({
                    required: true,
                });
                this.password.setErrors({
                    required: true,
                });
                this.loginForm.markAsUntouched();
                this.email.setErrors(null);
                this.password.setErrors(null);
                this.errorMessage = 'Email ou senha incorreta. Tente novamente!';
            }
        );

    }

    get email(): FormControl {
        return this.loginForm.get('email') as FormControl;
    }

    get password(): FormControl {
        return this.loginForm.get('password') as FormControl;
    }

}
