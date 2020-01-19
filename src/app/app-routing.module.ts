import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';


const routes: Routes = [{
  path: '', redirectTo: 'dashboard', pathMatch: 'full'
}, {
  path: 'dashboard', component: DashboardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadingStrategy,
    useHash: true,
    initialNavigation: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
