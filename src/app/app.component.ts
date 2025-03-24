import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from "./header/header.component";
// import { FooterComponent } from "./footer/footer.component";
import { NgFor, NgIf } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';


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
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Serdar';
  todos = [
    // 'logic 1 is',
    // 'logic 2 is',
    // 'logic 3 is',
    // 'logic 4 is'
  ];

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  processing = ['processing up groceries', 'processing home', 'Fall in love'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

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
}
