import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { LandingHeaderComponent } from './component/landing-header/landing-header.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductItemComponent } from './products/products-list/category-product-list/product-item/product-item.component';
import { ShopingCartComponent } from './products/shoping-cart/shoping-cart.component';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { PublisherService } from './service/publisher.service';





@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
      CommonModule,
      RouterOutlet,
      FooterComponent,
      HeaderComponent,
      LandingHeaderComponent,
      LandingPageComponent,
      ProductsComponent,
      ProductDetailsComponent,
      ProductsListComponent,
      ProductItemComponent,
      ShopingCartComponent,
      FormsModule,
      RouterLink
  ]
})
export class AppComponent {
  title = 'team3project';
  
  isWelcomePage:boolean | undefined;
  
  publisherService =inject(PublisherService);

  constructor(private router: Router,private route: ActivatedRoute) {
    this.publisherService.listenForData()
    .subscribe((data)=>{
      this.isWelcomePage=data;
      console.log(this.isWelcomePage);
    })
  }
}
