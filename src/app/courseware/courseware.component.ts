import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-courseware',
    templateUrl: './courseware.component.html',
    styleUrls: ['./courseware.component.scss']
})
export class CoursewareComponent {

    constructor(
		private router: Router,
    ) {}
    //this._router.navigate(['/collection/plan']);
}
