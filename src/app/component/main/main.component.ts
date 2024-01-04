import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FamousStoresGeneralComponent } from '../famous-stores-general/famous-stores-general.component';
import { AllStoresComponent } from '../all-stores/all-stores.component';
import { CategoriesComponent } from '../categories/categories.component';
import { Router } from '@angular/router';
import { StoresService } from '../../service/stores.service';
import { FamousStoresGeneralService } from '../../service/famous-stores-general.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,FamousStoresGeneralComponent,AllStoresComponent,CategoriesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  router: Router =inject(Router);
  famousStoresGeneral:any;
  famousGeneralService: FamousStoresGeneralService =inject(FamousStoresGeneralService);
  categories:any;
  storesService: StoresService =inject(StoresService);

  ngOnInit() {
    this.famousGeneralService.getFamousStoresGeneral()
    .subscribe({
      next: response => {
        console.log(response);
        this.famousStoresGeneral =response;
      } 
    });
    this.storesService.getStores()
    .subscribe({
      next: response => {
        console.log(response);
        this.categories =response;
      } 
    });
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
