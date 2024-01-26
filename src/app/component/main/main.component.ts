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
import { PublisherService } from '../../service/publisher.service';

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
  showAlertFlag= false;
  first_name: string="";
  User: any; 
  publisherService =inject(PublisherService);
  isWelcomePage=false;
  ngOnInit() {
    this.titleService.setTitle("Discovery");
    this.publisherService.publishData(this.isWelcomePage);
    // this.first_name = JSON.stringify(sessionStorage.getItem("first_name")).replace(/"/g, "");
    // if(this.first_name){
    //   this.showAlertFlagSignUp= true;
    // }
    // setTimeout(() => {
    //   this.showAlertFlagSignUp = false;
    // }, 5000); 
    // Retrieve the stored user information from local storage
   
    const storedUser = sessionStorage.getItem('User');
    console.log( storedUser);
   
    if (storedUser) {
      this.showAlertFlag= true;
      setTimeout(() => {
        this.showAlertFlag = false;
      }, 5000); 
      // Parse the stored JSON string back into a JavaScript object
      this.User = JSON.parse(storedUser);
      console.log(this.User);
      // Now, this.authenticatedUser contains the information of the authenticated user
    } else {
      // Handle the case when no user information is stored in local storage
      console.log('No user information found in local storage');
      this.showAlertFlag = false;
    }
  
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