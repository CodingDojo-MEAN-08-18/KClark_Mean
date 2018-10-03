/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthorService } from './author.service';

describe('Service: Author', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorService]
    });
  });

  it('should ...', inject([AuthorService], (service: AuthorService) => {
    expect(service).toBeTruthy();
  }));
});
