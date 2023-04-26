import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
})
export class LoginModule { }
