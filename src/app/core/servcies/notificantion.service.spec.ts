import { TestBed } from '@angular/core/testing';

import { NotificantionService } from './notificantion.service';

describe('NotificantionService', () => {
  let service: NotificantionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificantionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
