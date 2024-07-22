import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './component/initial/initial.component';
import { AppComponent } from './app.component';
import { LayoutComponent } from './component/layout/layout.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = 
[
  {
    path: 'initial',
    component: InitialComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ],
  },
  { path: '', redirectTo: 'initial/login', pathMatch: 'full' },
  // { path: '', redirectTo: 'erp/purchase', pathMatch: 'full' },
  { path: 'test', component: AppComponent },
  // {path: '**', redirectTo: '/erp'},
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      // { path: '', redirectTo: 'home', pathMatch: 'full' },
      // { path: 'purchase', component: BodyComponent, canActivate: [AuthGuard] }
      

    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
