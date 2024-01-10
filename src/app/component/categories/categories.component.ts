import { Component, inject } from '@angular/core';
import { UniqueCategoryPipe } from "../../pipe/unique-category.pipe";
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../service/categories.service';

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
  
  ngOnInit() {
    this.catService.getCategories().subscribe((data) => {
      this.fCategories = data;
    });
  }
  
  onCategoryClick(category: string) {
    this.router.navigate(["categories",category]);
  }

  constructor(private titleService: Title) {
    titleService.setTitle("Categories");
}
}
