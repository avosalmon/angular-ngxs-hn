import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsListComponent } from './news-list/news-list.component';

@NgModule({
  declarations: [
    NewsComponent,
    NewsListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
