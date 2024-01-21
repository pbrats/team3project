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
import { CategoriesPhotosService } from '../../service/categories-photos.service';

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
  stores:any;
  storeService: StoresService =inject(StoresService);
  catPhotoService: CategoriesPhotosService =inject(CategoriesPhotosService);
  photosCategories: any;
  hasLoadedCategories : boolean= false;
  hasLoadedFamous : boolean= false;

  ngOnInit() {
    this.titleService.setTitle("Discovery");
    this.catService.getCategories().subscribe({
      next: data => {
        setTimeout(() =>{
      // (data) => {
          this.fCategories = data;
          this.hasLoadedCategories=true;
        },10);
      }
    });
    this.catPhotoService.getCategoriesPhotos().subscribe((response) => {
      this.photosCategories = response;
    });
    this.storeService.getStores().subscribe((response) => {
      this.stores = response;
    });
    this.famousGeneralService.getFamousStoresGeneral()
    .subscribe({
      next: response => {
        setTimeout(() =>{
          console.log(response);
          this.famousStoresGeneral =response;
          this.hasLoadedFamous=true;
        },10);
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
  onViewStoreDetails(idClicked: number) {
    const foundStore = this.stores.find((store: any) => store.id === idClicked);
    console.log(foundStore);
    if (foundStore){
      this.router.navigate(["stores",idClicked]);
    }else{
      this.router.navigate(["menu-not-found"]);
    }
  }
}