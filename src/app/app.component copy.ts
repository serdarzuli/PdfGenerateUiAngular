// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { NgFor, NgIf } from '@angular/common';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import {MatCardModule} from '@angular/material/card';
// import {DragDropModule} from '@angular/cdk/drag-drop';
// import {MatButtonModule} from '@angular/material/button';
// import {MatInputModule} from '@angular/material/input';
// import { FormsModule } from '@angular/forms';
// import {
//   CdkDragDrop,
//   moveItemInArray,
//   transferArrayItem,
//   CdkDrag,
//   CdkDropList,
// } from '@angular/cdk/drag-drop';


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     RouterOutlet,
//     NgFor,
//     NgIf,
//     MatSlideToggleModule,
//     MatFormFieldModule,
//     MatCardModule,
//     DragDropModule,
//     CdkDrag,
//     CdkDropList,
//     MatInputModule,
//     MatButtonModule,
//     FormsModule
//   ],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {

//   data: any = {
//     todo: ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'],
//     processing: ['processing up groceries', 'processing home', 'Fall in love'],
//     done: ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog']
//   };

//   drop(event: CdkDragDrop<string[]>) {
//     if (event.previousContainer === event.container) {
//       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
//     } else {
//       transferArrayItem(
//         event.previousContainer.data,
//         event.container.data,
//         event.previousIndex,
//         event.currentIndex,
//       );
//       Object.keys(this.data).forEach((key) => {
//         localStorage.setItem(key, JSON.stringify(this.data[key]));
//       });
//     }
//   }

//   addTodo(todo: { value: string; }){
//     console.log(todo.value)
//     this.data.todo.push(todo.value)
//     localStorage.setItem('todo', JSON.stringify(this.data.todo))
//   }

//   setItems(){
//     Object.keys(this.data).forEach((key) => {
//       const storedValue = localStorage.getItem(key);

//       if (!storedValue){
//         localStorage.setItem(key, JSON.stringify(this.data[key]));
//       }
//       else{
//         this.data[key] = JSON.parse(storedValue);
//       }
//     });
//   }

//   // setItems(){
//   //   if (!localStorage.getItem('todo')){
//   //     localStorage.setItem('todo', JSON.stringify(this.data.todo));
//   //   } 
//   //   else {
//   //     this.data.todo = JSON.parse(localStorage.getItem('todo'));
//   //   }
//   // }

// }
