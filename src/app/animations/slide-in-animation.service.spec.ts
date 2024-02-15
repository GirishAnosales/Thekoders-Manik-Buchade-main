import { TestBed } from '@angular/core/testing';

import { SlideInAnimationService } from './slide-in-animation.service';

describe('SlideInAnimationService', () => {
  let service: SlideInAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlideInAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
