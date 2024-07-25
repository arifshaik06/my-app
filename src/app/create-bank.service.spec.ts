import { TestBed } from '@angular/core/testing';

import { CreateBankService } from './create-bank.service';

describe('CreateBankService', () => {
  let service: CreateBankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateBankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
