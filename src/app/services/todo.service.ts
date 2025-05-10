import {inject, Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private apiUrl: string,
  ) { }

  addTodo(obj: { todo: any; }) {
    return this.http.post(this.apiUrl + '/todo', obj);
  }

  getAllTodos() {
    return this.http.get(this.apiUrl + '/todo');
  }

  updateTodo(obj: any) {
    return this.http.put(this.apiUrl + '/todo', obj);
  }

  removeTodo(id: string) {
    return this.http.delete(this.apiUrl + '/todo/' + id);
  }

}