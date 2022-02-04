import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductService } from './compononts/product/product.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './compononts/header/header.component';
import { ButtonComponent } from './compononts/button/button.component';
import { TasksComponent } from './compononts/tasks/tasks.component';
import { TaskItemComponent } from './compononts/task-item/task-item.component';
import { ProductsComponent } from './compononts/products/products.component';
import { ProductComponent } from './compononts/product/product.component';
import { HomeComponent } from './compononts/home/home.component';
import { AppRouterModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    ProductsComponent,
    ProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    AppRouterModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
