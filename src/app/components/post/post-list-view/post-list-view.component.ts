import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list-view.component.html',
  styleUrls: ['./post-list-view.component.scss'],
})
export class PostListViewComponent implements OnInit {
  @Input() post!: Post;
  constructor() {}

  ngOnInit(): void {}
}
