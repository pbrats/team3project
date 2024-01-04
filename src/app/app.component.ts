import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LandingHeaderComponent } from './component/landing-header/landing-header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule,RouterOutlet,HeaderComponent,FooterComponent,LandingHeaderComponent]
})
export class AppComponent {
  title = 'Delivery';
}
