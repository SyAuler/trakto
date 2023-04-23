import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TraktoService } from '../core/trakto.service';
import { retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CoursewareService {

    constructor(
        private traktoService: TraktoService,
    ) { }

    getList(params: any): Observable<any> {
        return this.traktoService.get('document', null, params)
        .pipe(
            retry(3)
        )

    }

}
