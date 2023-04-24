import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        public auth: AuthService,
        private router: Router,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        if (this.auth.isLoggedIn()) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${this.auth.getToken()}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
        } else {
            request = request.clone({
                setHeaders: {
                    'Accept': 'application/json',
                }
            });
        }

        return next.handle(request).pipe(catchError((err) => this.handleAuthError(err)));
    }

    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        if (err.status === 401 && err.error.is_authenticated === 'False') {
            this.router.navigateByUrl(`/login`);
            return of(err.message);
        }
        return throwError(err);
    }
}
