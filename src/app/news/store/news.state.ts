import { HttpClient } from '@angular/common/http';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { News } from '../models/news.model';
import * as newsActions from './news.actions';

export interface NewsStateModel {
  news: News[];
  page: number;
  loading: boolean;
}

@State<NewsStateModel>({
  name: 'news',
  defaults: {
    news: [],
    page: 1,
    loading: false
  }
})
export class NewsState {
  constructor(private http: HttpClient) { }

  @Selector()
  static news(state: NewsStateModel) {
    return state.news;
  }

  @Selector()
  static page(state: NewsStateModel) {
    return state.page;
  }

  @Selector()
  static loading(state: NewsStateModel) {
    return state.loading;
  }

  @Action(newsActions.LoadNews)
  loadNews(ctx: StateContext<NewsStateModel>) {
    ctx.patchState({ loading: true });

    const state = ctx.getState();
    const url = `https://api.hackerwebapp.com/news?page=${state.page}`;

    return this.http.get<News[]>(url).pipe(
      tap(news => ctx.dispatch(new newsActions.LoadNewsSuccess(news))),
      catchError(error => ctx.dispatch(new newsActions.LoadNewsFail(error)))
    );
  }

  @Action(newsActions.LoadNewsSuccess)
  loadNewsSuccess(ctx: StateContext<NewsStateModel>, action: newsActions.LoadNewsSuccess) {
    ctx.patchState({
      news: action.payload,
      loading: false
    });
  }

  @Action(newsActions.LoadNewsFail)
  loadNewsfail(ctx: StateContext<NewsStateModel>, action: newsActions.LoadNewsFail) {
    ctx.patchState({ loading: false });
    window.alert(action.payload.message);
  }

  @Action(newsActions.ChangePage)
  changePage(ctx: StateContext<NewsStateModel>, action: newsActions.ChangePage) {
    ctx.patchState({ page: action.payload });
    ctx.dispatch(new newsActions.LoadNews());
  }
}
