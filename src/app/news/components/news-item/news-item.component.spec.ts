import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { News } from '../../models/news.model';
import { NewsItemComponent } from './news-item.component';

describe('NewsItemComponent', () => {
  let component: NewsItemComponent;
  let fixture: ComponentFixture<NewsItemComponent>;
  let news: News;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemComponent);
    component = fixture.componentInstance;

    news = {
      id: 1,
      title: 'The AI Threat to Open Societies',
      points: 42,
      user: 'malloryerik',
      time: 1548572441,
      time_ago: '3 hours ago',
      comments_count: 41,
      type: 'link',
      url: 'https://www.project-syndicate.org/onpoint/the-ai-threat-to-open-societies-by-george-soros-2019-01'
    };

    component.news = news;

    fixture.detectChanges();
  });

  test('create component', () => {
    expect(component).toBeTruthy();
  });
});
