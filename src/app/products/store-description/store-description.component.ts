import { Component, Input, inject } from '@angular/core';
import { Store } from '../../interfaces/store';
import { CommonModule } from '@angular/common';
import { StoresPhotosService } from '../../service/stores-photos.service';

@Component({
  selector: 'app-store-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store-description.component.html',
  styleUrl: './store-description.component.css'
})
export class StoreDescriptionComponent {
@Input() store!: Store;
storePhotoService: StoresPhotosService =inject(StoresPhotosService);
storePhotos:any;
ngOnInit(): void {    
  this.storePhotoService.getStoresPhotos().subscribe((response) => {
    this.storePhotos = response;
  });
}
}
