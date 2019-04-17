import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent} from './page/page.component';

const ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageComponent,
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: PageComponent
      },
      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  declarations: [],
  exports: [RouterModule]
})
export class PublicRoutingModule {}
