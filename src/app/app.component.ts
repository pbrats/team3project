import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from "./header/header.component";
=======
import { HeaderComponent } from './header/header.component';
>>>>>>> giouli

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        CommonModule,
        RouterOutlet,
        FooterComponent,
        HeaderComponent
    ]
})
export class AppComponent {
  title = 'team3project';
}
