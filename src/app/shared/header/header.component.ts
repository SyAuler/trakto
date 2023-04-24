import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    @Input() theme!: string;
    @Input() icon: string = 'trakto-edu.svg';
    date: Date = new Date;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    showBackButton() {
        return this.router.url !== '/home';
    }

    goToHome() {
        this.router.navigate(['/home']);
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
