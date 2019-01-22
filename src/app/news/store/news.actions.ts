import { News } from '../models/news.model';

export class LoadNews {
  static readonly type = '[News] Load News';
}

export class LoadNewsSuccess {
  static readonly type = '[News] Load News Success';
  constructor(public readonly payload: News[]) { }
}

export class LoadNewsFail {
  static readonly type = '[News] Load News Fail';
  constructor(public readonly payload?: any) { }
}

export class ChangePage {
  static readonly type = '[News] Change Page';
  constructor(public readonly payload: number) { }
}
