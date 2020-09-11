import { TestBed } from '@angular/core/testing';

import { CsvReaderService } from './csv-reader.service';
import { HttpClientModule } from '@angular/common/http';

describe('CsvReaderService', () => {
  let service: CsvReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(CsvReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
