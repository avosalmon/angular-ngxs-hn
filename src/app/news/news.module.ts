import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';

import { NewsRoutingModule } from './news-routing.module';
import * as store from './store';
import { NewsComponent } from './news.component';
import { NewsListComponent } from './containers/news-list/news-list.component';
import { NewsMaterialModule } from './news-material.module';

@NgModule({
  declarations: [
    NewsComponent,
    NewsListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NewsMaterialModule,
    NewsRoutingModule,
    NgxsModule.forFeature([store.NewsState])
  ]
})
export class NewsModule { }
