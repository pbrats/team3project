import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FamousStoresGeneralComponent } from '../famous-stores-general/famous-stores-general.component';
import { AllStoresComponent } from '../all-stores/all-stores.component';
import { CategoriesComponent } from '../categories/categories.component';
import { ActivatedRoute, Router } from '@angular/router';
import { StoresService } from '../../service/stores.service';
import { FamousStoresGeneralService } from '../../service/famous-stores-general.service';
import { UniqueCategoryPipe } from "../../pipe/unique-category.pipe";
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [CommonModule, FamousStoresGeneralComponent, AllStoresComponent, CategoriesComponent, UniqueCategoryPipe]
})
export class MainComponent {
  router: Router =inject(Router);
  famousStoresGeneral:any;
  famousGeneralService: FamousStoresGeneralService =inject(FamousStoresGeneralService);
  categories:any;
  categories1:any;
  categories2:any;
  storesService: StoresService =inject(StoresService);

  ngOnInit() {
    this.storesService.getStores()
    .subscribe({
      next: response => {
        console.log(response);
        this.categories1 =response;
        // vriskei categories apo stores.json
      } 
    });
    this.famousGeneralService.getFamousStoresGeneral()
    .subscribe({
      next: response => {
        console.log(response);
        this.famousStoresGeneral =response;
        this.categories2 =response;
        // vriskei categories apo to json most_famous_stores_in_general
        this.categories=this.categories1.concat(this.categories2)
        // enonei categories
      } 
    });
  }

  constructor(private route: ActivatedRoute,private titleService: Title) {
    titleService.setTitle("Discovery");
  }

viewFamousStores(){
  this.router.navigate(["famous-stores"]);
}
viewStores(){
  this.router.navigate(["stores"]);
}
viewCategories(){
  this.router.navigate(["categories"]);
}
}
