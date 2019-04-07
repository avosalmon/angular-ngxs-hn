import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() page: number;

  get hasPrevPage(): boolean {
    return this.prevPage > 0;
  }

  get prevPage(): number {
    return this.page - 1;
  }

  get nextPage(): number {
    return this.page + 1;
  }
}
