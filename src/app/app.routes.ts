import { Routes } from '@angular/router';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { AllStoresComponent } from './component/all-stores/all-stores.component';
import { FamousStoresGeneralComponent } from './component/famous-stores-general/famous-stores-general.component';
import { MainComponent } from './component/main/main.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { ProductsComponent } from './products/products.component';
import { SelectedCategoryComponent } from './component/selected-category/selected-category.component';
import { SignUpPageComponent } from './component/sign-up-page/sign-up-page.component';

export const routes: Routes = [
    {path: "", redirectTo: "welcome", pathMatch:"full"},
    {path: "welcome", component: LandingPageComponent},
    {path: "discovery", component: MainComponent},
    {path: "famous-stores", component: FamousStoresGeneralComponent},
    {path: "stores", component: AllStoresComponent},
    {path: "categories", component: CategoriesComponent},
    {path: "categories/:category",component: SelectedCategoryComponent},
    {path: "stores/:id", component: ProductsComponent},
    {path: "products", component: ProductsComponent},
    {path: "sign-up", component: SignUpPageComponent},
    {path: "**", component: NotFoundComponent}
];
