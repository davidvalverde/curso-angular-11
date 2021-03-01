import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { SecundariaComponent } from './components/secundaria/secundaria.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { Child3Component } from './components/child3/child3.component';
import { TerceraComponent } from './components/tercera/tercera.component';
import { Child4Component } from './components/child4/child4.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: SecundariaComponent, canActivate: [AuthGuard], children: [
    { path: '', redirectTo: 'perfil', pathMatch: 'full' },
    { path: 'child1', component: Child1Component },
    { path: 'child2', component: Child2Component },
    { path: 'child3', component: Child3Component }
  ]},
  { path: 'tercera/:param', component: TerceraComponent, children: [
    { path: 'child4', component: Child4Component } 
  ]}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing: false } // <-- Solo para hacer debugging
    )
  ],
  providers: []
})
export class AppRoutingModule { }
