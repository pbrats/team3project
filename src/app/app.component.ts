import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/core/footer/footer.component';
import { HeaderComponent } from "./components/core/header/header.component";
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductItemComponent } from './products/products-list/category-product-list/product-item/product-item.component';
import { ShopingCartComponent } from './products/shoping-cart/shoping-cart.component';
import { FormsModule } from '@angular/forms';
import { CategoryProductListComponent } from './products/products-list/category-product-list/category-product-list.component';

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
        RouterLink,
        CategoryProductListComponent
    ]
})
export class AppComponent {
 
}
