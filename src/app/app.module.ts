import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './component/layout/layout.component';
import { HomeComponent } from './component/home/home.component';
import { InitialComponent } from './component/initial/initial.component';
import { NavbarComponent } from './component/menu/navbar/navbar.component';
import { SidebarComponent } from './component/menu/sidebar/sidebar.component';
import { ToolbarComponent } from './component/menu/toolbar/toolbar.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    InitialComponent,
    NavbarComponent,
    SidebarComponent,
    ToolbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
