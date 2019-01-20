import { News } from '../models/news.model';

export class FetchNews {
  static readonly type = '[News] Fetch News';
}

export class FetchNewsSuccess {
  static readonly type = '[News] Fetch News Success';
  constructor(public readonly payload: News[]) {}
}

export class FetchNewsFail {
  static readonly type = '[News] Fetch News Fail';
  constructor(public readonly payload?: any) {}
}
