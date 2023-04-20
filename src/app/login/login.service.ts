import { Injectable } from '@angular/core';
import { TraktoService } from './../core/trakto.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(
        private traktoService: TraktoService
    ) { }

}
