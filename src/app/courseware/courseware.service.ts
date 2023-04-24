import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TraktoService } from '../core/trakto.service';
import { retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CoursewareService {

    array: Array<any> = [
        {
            name: 'Aula 1: Fono-ortografia',
            img: ''
        },
        {
            name: 'Aula 2: Protocolos de Leitura',
            img: ''
        },
        {
            name: 'Aula 3: Corpo Humano',
            img: ''
        },
        {
            name: 'Aula 4: Morfologia',
            img: ''
        },
        {
            name: 'Aula 5: Constelações & Mapas Celestial',
            img: ''
        },
        {
            name: 'Aula 6:',
            img: ''
        },
        {
            name: 'Aula 7:',
            img: ''
        },
        {
            name: 'Aula 8:',
            img: ''
        },
    ]

    constructor(
        private traktoService: TraktoService,
    ) { }

    getListAllDesigns(params: any): Observable<any> {
        return of(this.array);
        return this.traktoService.get('document', null, params)
        .pipe(
            retry(3)
        )
    }

    getID(id: number): Observable<any> {
		return this.traktoService.get('document/', id);
	}

}
