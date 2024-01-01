import { Component, Input } from '@angular/core';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [MenuListItemComponent, FormsModule, CommonModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})
export class MenuListComponent {
@Input() products: any;
}
