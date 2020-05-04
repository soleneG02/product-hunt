import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;
  let http;
  let backend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ApiService);
  });

  beforeEach(inject([ApiService, HttpClient, HttpTestingController], (
      conf: ApiService,
      _h: HttpClient,
      _b: HttpTestingController
  ) => {
      service = conf;
      http = _h;
      backend = _b;
  }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call backend for posts from day', () => {
      service.getTodayPosts().subscribe(res => {
          expect(res).toBe('check');
      });

      const req = backend.expectOne({
          url: 'http://localhost:3000/api',
          method: 'GET'
      });

      req.flush('check', { status: 200, statusText: 'ok' });
  });

  it('should call backend for posts from certain day', () => {
      const day = '2019-05-03';
      service.getPostsByDay(day).subscribe(res => {
          expect(res).toBe('check');
      });

      const req = backend.expectOne({
          url: `http://localhost:3000/api/${day}`,
          method: 'GET'
      });

      req.flush('check', { status: 200, statusText: 'ok' });
  });

  it('should call backend for a post with a certain id', () => {
    const id = 1998;
    service.getPostById(id).subscribe(res => {
        expect(res).toBe('check');
    });

    const req = backend.expectOne({
        url: `http://localhost:3000/api/post/${id}`,
        method: 'GET'
    });

    req.flush('check', { status: 200, statusText: 'ok' });
  });
});
