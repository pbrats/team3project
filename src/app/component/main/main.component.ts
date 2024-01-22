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
import { CategoriesService } from '../../service/categories.service';


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
  fCategories:any;
  catService: CategoriesService =inject(CategoriesService);
  storesService: StoresService =inject(StoresService);

  ngOnInit() {
    this.catService.getCategories().subscribe((data) => {
      this.fCategories = data;
    });
    this.famousGeneralService.getFamousStoresGeneral()
    .subscribe({
      next: response => {
        console.log(response);
        this.famousStoresGeneral =response;
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
onCategoryClick(category: string) {
  this.router.navigate(["categories",category]);
}
}



