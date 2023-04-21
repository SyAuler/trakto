import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    @Input() theme!: string;
    date: Date = new Date;

    constructor(
        private authService: AuthenticationService,
        private router: Router
    ) {}

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
