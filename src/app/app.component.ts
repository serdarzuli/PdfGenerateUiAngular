import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { TodoService } from './services/todo.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor,
    NgIf,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatCardModule,
    DragDropModule,
    CdkDrag,
    CdkDropList,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  data: any = {};

  constructor(
    private todoService: TodoService,
    private snackBar: MatSnackBar
  ){}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addTodo(todo: { value: string; }) {
    const obj = { todo: todo.value };
    this.todoService.addTodo(obj)
      .subscribe((res: any) => {
        this.openSnackBar(res.message);
        this.getAllTodos();
        todo.value = '';
      }, (err) => {
        console.log(err);
      });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Tamam', {
      duration: 2000,
    });
  }

  getAllTodos() {
    this.todoService.getAllTodos()
      .subscribe((res: any) => {
        console.log(res);
        Object.keys(res).forEach((key) => {
          this.data[key] = res[key];
        });
      }, (err) => {
        console.log(err);
      });
  }

  updateTodo() {
    this.todoService.updateTodo(this.data)
      .subscribe((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
  }

  removeTodo(id: string) {
    if (confirm('Bu maddeyi silmek istediğinize emin misiniz?')) {
      this.todoService.removeTodo(id)
        .subscribe((res) => {
          console.log(res);
          this.getAllTodos();
        }, (err) => {
          console.log(err);
        });
    }
  }
  
}
