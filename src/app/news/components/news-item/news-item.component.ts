import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { News } from '../../models/news.model';

@Component({
  selector: 'app-news-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {

  @Input() news: News;

}
