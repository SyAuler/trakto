import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { concatMap, map, Observable, of } from 'rxjs';
import { TraktoService } from './trakto.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private isAuthenticated = false;

    constructor(
        private traktoService: TraktoService,
        private router: Router,
    ) { }
    
    login(email: string, password: string): Observable<any> {
        return this.traktoService
            .post('auth/signin', {
                email,
                password,
            })
            .pipe(
                concatMap((res) => {
                    this.isAuthenticated = true;
                    this.router.navigate(['/home']);
                    localStorage.setItem('token', JSON.stringify(res));
                    //this.setAuthenticationToken(res.token);
                    return res.can_authenticate;
                })
            );
    }

    private setAuthenticationToken(token: string): Observable<any> {
		return this.traktoService.post('user/by_token/', { token }).pipe(
			map((res) => {
				this.router.navigate(['/']);
				localStorage.setItem('token', JSON.stringify(token));
			})
		);
	}

    logout(): void {
        this.isAuthenticated = false;
        this.router.navigateByUrl('/login');
    }

    getIsAuthenticated(): boolean {
        return this.isAuthenticated;
    }

}
