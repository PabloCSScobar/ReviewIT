import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      sidemenu works!
    </p>
  `,
  styles: [
  ]
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
