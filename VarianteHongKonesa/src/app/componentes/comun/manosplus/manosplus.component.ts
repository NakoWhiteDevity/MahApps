import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-manosplus',
  templateUrl: './manosplus.component.html'
})
export class ManosplusComponent implements OnInit {
  
  @Input() pshijo:string[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }





}
