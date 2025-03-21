import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  name: string | undefined;
  callCenter!: string;
  constructor(private testService: TestService){}

  ngOnInit(): void {
    this.name = "serdar";
    this.callCenter = this.testService.callCenter;
  }
}
