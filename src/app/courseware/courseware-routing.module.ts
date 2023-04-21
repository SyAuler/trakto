import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursewareComponent } from './courseware.component';

const routes: Routes = [
    {
        path: '',
        component: CoursewareComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class CoursewareRoutingModule { }
