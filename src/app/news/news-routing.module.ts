import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsListComponent } from './containers/news-list/news-list.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [
      {
        path: '',
        component: NewsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
