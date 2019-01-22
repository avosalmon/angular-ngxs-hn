import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { News } from '../../models/news.model';
import * as newsStore from '../../store';

@Component({
  selector: 'app-news-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  @Select(newsStore.NewsState.news) news$: Observable<News[]>;

  @Select(newsStore.NewsState.page) page$: Observable<number>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new newsStore.LoadNews());
  }

  onPageChange(page: number) {
    this.store.dispatch(new newsStore.ChangePage(page));
  }

}
