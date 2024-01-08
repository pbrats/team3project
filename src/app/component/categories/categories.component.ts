import { Component, inject } from '@angular/core';
import { StoresService } from '../../service/stores.service';
import { UniqueCategoryPipe } from "../../pipe/unique-category.pipe";
import { CommonModule } from '@angular/common';
import { FamousStoresGeneralService } from '../../service/famous-stores-general.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-categories',
    standalone: true,
    templateUrl: './categories.component.html',
    styleUrl: './categories.component.css',
    imports: [UniqueCategoryPipe, CommonModule]
})
export class CategoriesComponent {
  categories:any;
  categories1:any;
  categories2:any;
  storesService: StoresService =inject(StoresService);
  famousStoresGService: FamousStoresGeneralService =inject(FamousStoresGeneralService);


  ngOnInit() {
    this.storesService.getStores()
    .subscribe({
      next: response => {
        console.log(response);
        this.categories1 =response;
        // vriskei categories apo to json stores
      } 
    });
    this.famousStoresGService.getFamousStoresGeneral()
    .subscribe({
      next: response => {
        console.log(response);
        this.categories2 =response;
        // vriskei categories apo to json most_famous_stores_in_general
        this.categories=this.categories1.concat(this.categories2)
        // enonei categories
        console.log(this.categories)

      } 
    });
  }
  constructor(private titleService: Title) {
    titleService.setTitle("Categories");
}
}
