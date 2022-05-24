import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {CategoryComponent} from './category/category.component';
import {ProductComponent} from './product/product.component';
import {ProductFilterPipe} from './product/product-filter.pipe';
import {AlertifyService} from "./services/alertify.service";
import {HttpClientModule} from "@angular/common/http";
import {CategoryService} from "./services/category.service";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AlertifyService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
