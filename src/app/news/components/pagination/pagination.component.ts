import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() page: number;

  @Output() pageChanded: EventEmitter<number> = new EventEmitter();

  onPrev() {
    if (this.page > 1) {
      const prev = this.page - 1;
      this.pageChanded.emit(prev);
    }
  }

  onNext() {
    const next = this.page + 1;
    this.pageChanded.emit(next);
  }
}
