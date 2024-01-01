import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from "./core/header/header.component";
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductItemComponent } from './products/products-list/product-item/product-item.component';
import { ShopingCartComponent } from './products/shoping-cart/shoping-cart.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AllStoresComponent } from './all-stores/all-stores.component';
import { StoreDetailsComponent } from './all-stores/store-details/store-details.component';

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
        ProductsComponent,
        ProductDetailsComponent,
        ProductsListComponent,
        ProductItemComponent,
        ShopingCartComponent,
        FormsModule,
        AllStoresComponent,
        HomeComponent,
        StoreDetailsComponent
    ]
})
export class AppComponent {
 
}
