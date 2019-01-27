import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() page: number;

  prevPage(): number {
    return this.page - 1;
  }

  nextPage(): number {
    return this.page + 1;
  }
}
