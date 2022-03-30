import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppModule } from './app.module';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: `missions`,
    loadChildren: () => import('./missions/missions.module').then(m => m.MissionsPageModule)
  },
  {
    path: 'animaux',
    loadChildren: () => import('./animals/animals.module').then(m => m.AnimalsPageModule)
  },
  {
    path: 'encyclopedie',
    loadChildren: () => import('./encyclopedie/encyclopedie.module').then(m => m.EncyclopediePageModule)
  },
  {
    path: 'alertes',
    loadChildren: () => import('./alertes/alertes.module').then(m => m.AlertesPageModule)
  },
  {
    path: 'comptes',
    loadChildren: () => import('./comptes/comptes.module').then(m => m.ComptesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(
    private AppModule: AppModule,
  ) { }

  userid() {
    let user_id = this.AppModule.idUser;
    console.log(user_id);
    return user_id;
  }

}

