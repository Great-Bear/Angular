import { TestBed } from '@angular/core/testing';

import { UserDataSeviceService } from './user-data-sevice.service';

describe('UserDataSeviceService', () => {
  let service: UserDataSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
