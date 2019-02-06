import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { Subject } from 'rxjs';

import { NewsMaterialModule } from '../../news-material.module';
import { NewsListComponent } from './news-list.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { NewsItemComponent } from '../../components/news-item/news-item.component';
import { NewsState, ChangePage } from '../../store';

describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;
  let params$: Subject<Params>;

  beforeEach(async(() => {
    params$ = new Subject<Params>();

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        NewsMaterialModule,
        NgxsModule.forRoot([]),
        NgxsModule.forFeature([NewsState])
      ],
      declarations: [
        NewsItemComponent,
        NewsListComponent,
        PaginationComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: params$ }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should dispatch ChangePage action', () => {
      const page = 1;
      const action = new ChangePage(page);
      const store = TestBed.get(Store);
      const spy = jest.spyOn(store, 'dispatch').mockImplementation();

      fixture.detectChanges();
      params$.next({ page: page });

      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
