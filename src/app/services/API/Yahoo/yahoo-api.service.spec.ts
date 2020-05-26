import { TestBed } from '@angular/core/testing';

import { YahooApiService } from './yahoo-api.service';

describe('YahooApiService', () => {
  let service: YahooApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YahooApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
