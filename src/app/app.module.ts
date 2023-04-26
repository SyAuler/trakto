import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/auth.guard';
import { AuthInterceptor } from './core/auth.interceptor';
import { AuthService } from './core/auth.service';
import { TraktoService } from './core/trakto.service';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { CoursewareModule } from './courseware/courseware.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        LoginModule,
        HomeModule,
        CoursewareModule,
    ],
    providers: [
        HttpClient,
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
