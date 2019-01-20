import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import * as newsStore from '../store';
import { News } from '../models/news.model';

@Component({
  selector: 'app-news-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  @Select(newsStore.NewsState) news$: Observable<News[]>;

  constructor(private store: Store) {
    store.dispatch(new newsStore.LoadNews());
  }

  ngOnInit() {
  }

}
