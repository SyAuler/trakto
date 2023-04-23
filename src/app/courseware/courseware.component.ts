import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursewareService } from './courseware.service';

@Component({
    selector: 'app-courseware',
    templateUrl: './courseware.component.html',
    styleUrls: ['./courseware.component.scss']
})
export class CoursewareComponent implements OnInit {

    constructor(
        private router: Router,
        private coursewareService: CoursewareService,
    ) {}
    //this._router.navigate(['/collection/plan']);

    ngOnInit() {
        this.getList()
    }

    getList() {
        const params = {
            total_per_page: '5',
            order_by: 'title',
            order_orientation: 'desc'
        }
        this.coursewareService.getList(params).subscribe(
            res => {
                console.log('res', res)
            }
        )
    }
    
}
