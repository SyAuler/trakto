import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { concatMap, Observable, of } from 'rxjs';
import { TraktoService } from './trakto.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(
        private traktoService: TraktoService,
        private router: Router,
    ) { }

    authenticate(email: string, password: string): Observable<any> {
        return this.traktoService
            .post('auth/signin', {
                email,
                password,
            })
            .pipe(
                concatMap((res) => {
                    if (res.multi_factor) {
                        this.router.navigate(['/login'], {
                            queryParams: { token: res.token },
                        });
                        return of();
                    }
                    this.router.navigate(['/home']);
                    localStorage.setItem('token', JSON.stringify(res));
                    return res;
                })
            );
    }

}
