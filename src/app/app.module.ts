import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CoursewareModule } from './courseware/courseware.module';
import { AuthGuard } from './core/auth.guard';
import { SharedModule } from './shared/shared.module';
import { AuthInterceptor } from './core/auth.interceptor';
import { AuthService } from './core/auth.service';
import { TraktoService } from './core/trakto.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        LoginModule,
        CoursewareModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        TraktoService,
        AuthGuard,
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
