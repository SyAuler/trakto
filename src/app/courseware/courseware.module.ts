import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursewareRoutingModule } from './courseware-routing.module';
import { CoursewareComponent } from './courseware.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        CoursewareComponent,
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        RouterModule,
        CoursewareRoutingModule,
        SharedModule,
    ],    
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoursewareModule { }
