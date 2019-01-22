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
      this.page--;
      this.pageChanded.emit(this.page);
    }
  }

  onNext() {
    this.page++;
    this.pageChanded.emit(this.page);
  }
}
