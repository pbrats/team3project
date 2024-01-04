import { Component, inject } from '@angular/core';
import { StoresService } from '../../service/stores.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories:any;
  storesService: StoresService =inject(StoresService);

  ngOnInit() {
    this.storesService.getStores()
    .subscribe({
      next: response => {
        console.log(response);
        this.categories =response;
      } 
    });
  }
}
