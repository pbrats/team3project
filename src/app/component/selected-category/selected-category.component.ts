import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../service/categories.service';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { StoresInfosService } from '../../service/stores-infos.service';
import { StoresService } from '../../service/stores.service';

@Component({
  selector: 'app-selected-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selected-category.component.html',
  styleUrl: './selected-category.component.css'
})
export class SelectedCategoryComponent {
  activatedRoute =inject(ActivatedRoute);
  selectedCategory: string | undefined ;
  stores: any[]=[];
  storeFilter:any;
  storeService: StoresService =inject(StoresService);
  router: Router =inject(Router);
  catService: CategoriesService =inject(CategoriesService);
  storeInfosService: StoresInfosService =inject(StoresInfosService);
  storeInfos: any;
  hasLoadedStores : boolean= false;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.storeInfosService.getStoresInfos().subscribe((response) => {
      this.storeInfos = response;
    });
    this.storeService.getStores().subscribe((response) => {
      this.storeFilter = response;
    });
    this.activatedRoute.params.subscribe({
      next: params => {
        setTimeout(() =>{
      // (params:any) => {
          console.log(params);
          this.selectedCategory = params['category'];
          // this.selectedCategory = params.category;
          console.log(this.selectedCategory);
          this.titleService.setTitle(`${this.selectedCategory}`);
          this.catService.getCategories().subscribe((data:any) => {
            this.stores = data.filter((store:any) => store.category === this.selectedCategory);
            console.log(this.stores);
          });
          this.hasLoadedStores=true;
          },10);
      }
    });
  }
  onViewStoreDetails(idClicked: number) {
    const foundStore = this.storeFilter.find((store: any) => store.id === idClicked);
    console.log(foundStore);
    if (foundStore){
      this.router.navigate(["stores",idClicked]);
    }else{
      this.router.navigate(["menu-not-found"]);
    }
  }
  sortStoresByRating(): void {
    this.stores.sort((a: { rating: number; }, b: { rating: number; }) => b.rating - a.rating);
  }
  sortStoresByDeliveryTime():void {
    this.stores.sort((a: { delivery_time: number; }, b: { delivery_time: number; }) =>  a.delivery_time - b.delivery_time);
  }
  sortStoresAlphabetically():void {
    this.stores.sort((a: { name: string; }, b: { name: string; }) => a.name.localeCompare(b.name));
  }
  sortStoresZtoA():void {
    this.stores.sort((a: { name: string; }, b: { name: string; }) => b.name.localeCompare(a.name));
  }
}