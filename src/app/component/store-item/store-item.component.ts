import { Component, Input, inject } from '@angular/core';
import { Store } from '../../interfaces/store';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoresPhotosService } from '../../service/stores-photos.service';

@Component({
  selector: 'app-store-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store-item.component.html',
  styleUrl: './store-item.component.css'
})
export class StoreItemComponent {
@Input() store!: Store;

router: Router = inject(Router);
storePhotoService: StoresPhotosService =inject(StoresPhotosService);
storePhotos: any;

ngOnInit() {
  this.storePhotoService.getStoresPhotos().subscribe((response) => {
    this.storePhotos = response;
  });
}
onViewStoreDetails(id: number) {
  console.log("hello");
    this.router.navigate(["stores", id]);
}

}
