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
import { AboutComponent } from './component/about/about.component';
import { TermsOfUseComponent } from './component/terms-of-use/terms-of-use.component';
import { FaqsComponent } from './component/faqs/faqs.component';
import { SupportComponent } from './component/support/support.component';
import { SearchComponent } from './component/search/search.component';
<<<<<<< HEAD
import { OrderHistoryComponent } from './order-history/order-history.component';
=======
import { ProfileComponent } from './component/profile/profile.component';
import { PreviousOrdersComponent } from './component/previous-orders/previous-orders.component';

>>>>>>> 3a5c0c17c0a96ee8d8f7121b0ecc82cac6f77337
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
    {path: "profile", component: ProfileComponent},
    {path: "menu-not-found",component: NotFoundComponent},
    {path: "about", component: AboutComponent},
    {path: "faqs", component: FaqsComponent},
    {path: "support", component: SupportComponent},
    {path: "terms-of-use", component: TermsOfUseComponent},
    {path: "search", component: SearchComponent},
<<<<<<< HEAD
    {path: "**", component: NotFoundComponent},
    {path: "previous-orders", component: OrderHistoryComponent},
=======
    {path: "previous-orders", component: PreviousOrdersComponent},
    {path: "**", component: NotFoundComponent}
>>>>>>> 3a5c0c17c0a96ee8d8f7121b0ecc82cac6f77337
];