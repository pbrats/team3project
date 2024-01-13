import { Component, inject } from '@angular/core';
import { FamousStoresGeneralService } from '../../service/famous-stores-general.service';
import { Title } from '@angular/platform-browser';
import { StoresPhotosService } from '../../service/stores-photos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-famous-stores-general',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './famous-stores-general.component.html',
  styleUrl: './famous-stores-general.component.css'
})
export class FamousStoresGeneralComponent {
  famousStores:any;
  famousStoresGService: FamousStoresGeneralService =inject(FamousStoresGeneralService);
  storePhotoService: StoresPhotosService =inject(StoresPhotosService);
  storePhotos: any;
  hasLoadedFamous : boolean= false;

  ngOnInit() {
    this.storePhotoService.getStoresPhotos().subscribe((response) => {
      this.storePhotos = response;
    });
    this. famousStoresGService.getFamousStoresGeneral()
    .subscribe({
      next: response => {
        setTimeout(() =>{
          console.log(response);
          this.famousStores =response;
          this.hasLoadedFamous=true;
        },500);
      } 
    });
  }
  constructor(private titleService: Title) {
    titleService.setTitle("Famous Stores");
  }
}
