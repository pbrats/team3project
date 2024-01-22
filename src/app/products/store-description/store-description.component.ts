import { Component, Input, inject } from '@angular/core';
import { Store } from '../../interfaces/store';
import { CommonModule } from '@angular/common';
import { StoresInfosService } from '../../service/stores-infos.service';
import { RatingsComponent } from '../../component/ratings/ratings.component';

@Component({
  selector: 'app-store-description',
  standalone: true,
  imports: [CommonModule,RatingsComponent],
  templateUrl: './store-description.component.html',
  styleUrl: './store-description.component.css'
})
export class StoreDescriptionComponent {
  @Input() store!: Store;
  storeInfosService: StoresInfosService =inject(StoresInfosService);
  storeInfos:any;
  ngOnInit(): void {    
    this.storeInfosService.getStoresInfos().subscribe((response) => {
      this.storeInfos = response;
    });
  }
}