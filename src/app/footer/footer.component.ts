import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  callCenter?: string;

constructor(private testService: TestService){}

ngOnInit(): void {
  this.callCenter = this.testService.callCenter;
}
}
