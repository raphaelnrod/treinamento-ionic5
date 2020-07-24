import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'navigation',
    loadChildren: () => import('./pages/navigation/navigation.module').then( m => m.NavigationPageModule)
  },
  {
    path: 'navigation2',
    loadChildren: () => import('./pages/navigation2/navigation2.module').then( m => m.Navigation2PageModule)
  },
  {
    path: 'buttons',
    loadChildren: () => import('./pages/buttons/buttons.module').then( m => m.ButtonsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
