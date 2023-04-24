import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursewareRoutingModule } from './courseware-routing.module';
import { CoursewareComponent } from './courseware.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        CoursewareComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        CoursewareRoutingModule,
        SharedModule,
    ],    
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoursewareModule { }
