import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { CoursewareComponent } from './courseware/courseware.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: '', 
        redirectTo: '/login', 
        pathMatch: 'full' 
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
    },
    { 
        path: 'courseware',
        component: CoursewareComponent,
        canActivate: [AuthGuard],
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
