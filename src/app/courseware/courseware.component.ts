import { Component, OnInit } from '@angular/core';
import { CoursewareService } from './courseware.service';
import * as bootstrap from 'bootstrap/';

@Component({
    selector: 'app-courseware',
    templateUrl: './courseware.component.html',
    styleUrls: ['./courseware.component.scss']
})
export class CoursewareComponent implements OnInit {

    listAllDesigns!: Array<any>;
    slides: any = [];
    itemsPerSlide = 5;
    showAll!: boolean;
    linkEditor!: string;

    constructor(
        private coursewareService: CoursewareService,
    ) { }

    ngOnInit() {
        this.getListAllDesigns()
    }

    ngAfterViewInit() {
        new bootstrap.Carousel(
            document.querySelector('#carousel') 
            || document.querySelector('#carouselVideoLessons') 
            || ''
        );
    }

    getEditor(id: string) {
        return this.linkEditor = 'https://editor.trakto.io/presentation/p/'+id
    }

    getListAllDesigns() {
        const params = {
            nextCursor: '',
            total_per_page: '',
            order_by: 'created_at',
            order_orientation: 'desc'
        }
        this.coursewareService.getListAllDesigns(params).subscribe(
            res => {
                this.listAllDesigns = res.data;
                this.createSlides(this.listAllDesigns);
            }
        )
    }

    createSlides(listAllDesigns: any) {
        const chunks = this.chunk(listAllDesigns, this.itemsPerSlide);
        for (let i = 0; i < chunks.length; i++) {
            const slide = {
                id: i,
                items: chunks[i]
            };
            this.slides?.push(slide);
        }
    }

    chunk(array:any, size:any) {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            const chunk = array.slice(i, i + size);
            chunks.push(chunk);
        }
        return chunks;
    }
}
