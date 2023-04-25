import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, concatMap, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiUrl = environment.backendUrl
    private isAuthenticated = false;
    private token!: string;

    constructor(
        private router: Router,
        private http: HttpClient,
    ) { }

    login(email: string, password: string): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', Accept: '*/*' });
        return this.http.post(`${this.apiUrl}auth/signin`, { email, password }, { headers })
            .pipe(
                concatMap((res: any) => {
                    this.isAuthenticated = true;
                    this.router.navigate(['/home']);
                    this.setToken(res.access_token)
                    localStorage.setItem('token', JSON.stringify(res.access_token));
                    return res;
                }),
                catchError((error) => {
                    console.error(`Erro ao fazer login: ${error.status}, ${error.message}`);
                    return throwError(error);
                })
            );
    }

    logout(): void {
        this.isAuthenticated = false;
        localStorage.clear();
        this.router.navigateByUrl('/login');
    }

    setToken(token: string): void {
        this.token = token;
    }

    getToken(): string {
        return this.token;
    }

    getIsAuthenticated(): boolean {
        return localStorage.getItem('token') !== null;
    }

}
