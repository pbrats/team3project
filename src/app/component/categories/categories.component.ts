import { Component, inject } from '@angular/core';
import { UniqueCategoryPipe } from "../../pipe/unique-category.pipe";
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../service/categories.service';
import { CategoriesPhotosService } from '../../service/categories-photos.service';
import { PublisherService } from '../../service/publisher.service';

@Component({
    selector: 'app-categories',
    standalone: true,
    templateUrl: './categories.component.html',
    styleUrl: './categories.component.css',
    imports: [UniqueCategoryPipe, CommonModule]
})

export class CategoriesComponent {
  router: Router =inject(Router);
  activatedRoute =inject(ActivatedRoute);
  fCategories: any;
  catService: CategoriesService =inject(CategoriesService);
  catPhotoService: CategoriesPhotosService =inject(CategoriesPhotosService);
  photosCategories: any;
  hasLoadedCategories : boolean= false;
  publisherService =inject(PublisherService);
  isWelcomePage=false;
  
  ngOnInit() {
    this.publisherService.publishData(this.isWelcomePage);
    this.catService.getCategories().subscribe({
      next: data => {
      setTimeout(() =>{
    // (data) => {
        this.fCategories = data;
        this.hasLoadedCategories=true;
      },10);
      }
   });
    this.catPhotoService.getCategoriesPhotos().subscribe((data) => {
      this.photosCategories = data;
    });
  }
  
  onCategoryClick(category: string) {
    this.router.navigate(["categories",category]);
  }

  constructor(private titleService: Title) {
    titleService.setTitle("Categories");
  }
  sortStoresAlphabetically():void {
    this.fCategories.sort((a: { category: string; }, b: { category: string; }) => a.category.localeCompare(b.category));
  }
  sortStoresZtoA():void {
    this.fCategories.sort((a: { category: string; }, b: { category: string; }) => b.category.localeCompare(a.category));
  }
}