import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTodayPosts() {
    console.log('You requested today\'s posts using', `${this.REST_API_SERVER}/api`);
    return this.http.get(`${this.REST_API_SERVER}/api`);
  }

  getPostsByDay(day: string) {
    console.log('You requested day', day, 'using', `${this.REST_API_SERVER}/api/${day}`);
    return this.http.get(`${this.REST_API_SERVER}/api/${day}`);
  }

  getPostById(id: number) {
    console.log('You requested id', id, 'using', `${this.REST_API_SERVER}/api/post/${id}`);
    return this.http.get(`${this.REST_API_SERVER}/api/post/${id}`);
  }
}
