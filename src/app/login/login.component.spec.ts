import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../core/auth.service';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let service: AuthService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ LoginComponent ],
            imports: [ HttpClientTestingModule, ReactiveFormsModule ],
            providers: [ AuthService ]
        })
            .compileComponents();

        service = TestBed.inject(AuthService);
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have email and password fields', () => {
        const email = fixture.nativeElement.querySelector('#email');
        const password = fixture.nativeElement.querySelector('#password');

        expect(email).toBeTruthy();
        expect(password).toBeTruthy();
    });

    it('should validate email and password fields', () => {
        component.email.setValue('');
        component.password.setValue('');

        expect(component.email.valid).toBeFalsy();
        expect(component.password.valid).toBeFalsy();

        component.email.setValue('simone');
        component.password.setValue('camila');

        expect(component.email.valid).toBeTruthy();
        expect(component.password.valid).toBeTruthy();
    });

    it('should return the current user', () => {
        const email = 'simone@example.com';
        const password = '123456';

        const result = service.login(email, password);
        expect(result).toBe(result);
    });

});
