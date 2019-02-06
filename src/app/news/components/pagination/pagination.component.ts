import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() page: number;

  get hasPrevPage(): boolean {
    return this.prevPage > 1;
  }

  get prevPage(): number {
    return this.page - 1;
  }

  get nextPage(): number {
    return this.page + 1;
  }
}
