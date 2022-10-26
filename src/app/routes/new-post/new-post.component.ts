import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../components/main-layout/navigation/navigation.component';
import { PostFormComponent } from '../../components/post/post-form/post-form.component';

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [CommonModule, NavigationComponent, PostFormComponent],
  template: `
    <app-navigation>
      <div main-content>
        <app-post-form></app-post-form>
      </div>
      <div rightnav-content>Rightnav content</div>
    </app-navigation>
  `,
  styles: [],
})
export class NewPostComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
