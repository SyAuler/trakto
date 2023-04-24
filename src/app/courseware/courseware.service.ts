import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TraktoService } from '../core/trakto.service';
import { retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CoursewareService {

    constructor(
        private traktoService: TraktoService,
    ) { }

    getListAllDesigns(params: any): Observable<any> {
        return this.traktoService.get('document', null, params)
        .pipe(
            retry(3)
        )
    }

    getID(id: number): Observable<any> {
        return this.traktoService.get('document/', id);
    }

}
