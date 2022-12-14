import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ShopComponent } from './components/shop/shop.component';
import { HomeComponent } from './components/shop/home/home.component';
import { NavbarComponent } from './components/shop/navbar/navbar.component';
import { ProductComponent } from './components/shop/product/product.component';
import { ProductItemComponent } from './components/shop/product-item/product-item.component';

const appRoutes: Routes = [
  {path: '', component: TasksComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'product/:id', component: ProductItemComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    ShopComponent,
    HomeComponent,
    NavbarComponent,
    ProductComponent,
    ProductItemComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes,  {enableTracing: true})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
