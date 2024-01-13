import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../service/categories.service';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { StoresPhotosService } from '../../service/stores-photos.service';

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
  router: Router =inject(Router);
  catService: CategoriesService =inject(CategoriesService);
  storePhotoService: StoresPhotosService =inject(StoresPhotosService);
  storePhotos: any;
  hasLoadedStores : boolean= false;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.storePhotoService.getStoresPhotos().subscribe((response) => {
      this.storePhotos = response;
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
          },500);
      }
    });
  }

}
