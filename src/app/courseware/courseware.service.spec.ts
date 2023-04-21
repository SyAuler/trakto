import { TestBed } from '@angular/core/testing';

import { CoursewareService } from './courseware.service';

describe('CoursewareService', () => {
  let service: CoursewareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursewareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
