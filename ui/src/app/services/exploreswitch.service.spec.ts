import { TestBed, inject } from '@angular/core/testing';

import { ExploreswitchService } from './exploreswitch.service';

describe('ExploreswitchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExploreswitchService]
    });
  });

  it('should be created', inject([ExploreswitchService], (service: ExploreswitchService) => {
    expect(service).toBeTruthy();
  }));
});
