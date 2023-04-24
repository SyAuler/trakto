import { Component, OnInit } from '@angular/core';
import { CoursewareService } from './courseware.service';
import * as bootstrap from 'bootstrap/';

export interface Data {
    name: string
    img: string
}
@Component({
    selector: 'app-courseware',
    templateUrl: './courseware.component.html',
    styleUrls: ['./courseware.component.scss']
})
export class CoursewareComponent implements OnInit {

    listAllDesigns!: Array<any>;
    slides: any = [];
    itemsPerSlide = 5;

    constructor(
        private coursewareService: CoursewareService,
    ) { }

    ngOnInit() {
        this.getListAllDesigns()
    }

    ngAfterViewInit() {
        const carouselElement = document.querySelector('#carousel') || document.querySelector('#carouselVideoLessons') || '';
        const carousel = new bootstrap.Carousel(carouselElement);
    }

    getListAllDesigns() {
        const params = {
            total_per_page: '5',
            order_by: 'title',
            order_orientation: 'desc'
        }
        this.coursewareService.getListAllDesigns(params).subscribe(
            res => {
                const response = { status: 200, data: res };
                this.listAllDesigns = response.data as any[];
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
