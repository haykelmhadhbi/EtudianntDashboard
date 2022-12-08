import { TestBed } from '@angular/core/testing';

import { ServiceStudentService } from './service-student.service';

describe('ServiceStudentService', () => {
  let service: ServiceStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
