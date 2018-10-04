/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RouteTreeService } from './route-tree.service';

describe('Service: RouteTree', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteTreeService]
    });
  });

  it('should ...', inject([RouteTreeService], (service: RouteTreeService) => {
    expect(service).toBeTruthy();
  }));
});
