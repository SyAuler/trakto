import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL = environment.backendUrl
@Injectable({
    providedIn: 'root'
})
export class TraktoService {

    private headers!: HttpHeaders;

    constructor(
        private httpClient: HttpClient,
    ) { }

    public get(endpoint: string, id: number | null, params: any = null): Observable<any> {
        const url = `${API_URL}${endpoint}${id ? `${id}/` : ''}`;
        return this.httpClient.get(url, { params });
    }

    public post(endpoint: string, data: any, options?: any): Observable<any> {
        return this.httpClient.post(API_URL + endpoint, data, { headers: this.headers, ...options });
    }
}
