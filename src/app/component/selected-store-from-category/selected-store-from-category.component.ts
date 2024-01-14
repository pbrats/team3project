import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { StoresService } from '../../service/stores.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-selected-store-from-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selected-store-from-category.component.html',
  styleUrl: './selected-store-from-category.component.css'
})
export class SelectedStoreFromCategoryComponent {
  activatedRoute =inject(ActivatedRoute);
  selectedStore: string | undefined ;
  items: any[]=[];
  router: Router =inject(Router);
  storesService: StoresService =inject(StoresService);
  
  constructor(private titleService: Title) {}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any) => {
      console.log(params);
     
      this.selectedStore = params.name;
      console.log(this.selectedStore);
      this.titleService.setTitle(`${this.selectedStore}`);
      this.storesService.getStores().subscribe((data:any) => {
        this.items = data.filter((item:any) => item.name === this.selectedStore);
        console.log(this.items);
        if(this.items.length==0){
          this.router.navigate(["menu-not-found"]);}
      });
  });
}
}