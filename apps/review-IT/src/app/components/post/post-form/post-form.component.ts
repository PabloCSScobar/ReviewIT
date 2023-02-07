import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { Observable, tap } from 'rxjs';
import { PostCategory } from '../../../models/post-category.model';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PostService } from '../../../data-access/services/post.service';
import { AppState } from '../../../data-access/state/app.state';
import { Store } from '@ngrx/store';
import { AddPost } from '../../../data-access/actions/post.actions';
import { PostCreate } from '../../../models/post.model';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent {
  private postService = inject(PostService);
  private fb = inject(FormBuilder);
  private store = inject(Store<AppState>)
  
  postCategories$: Observable<PostCategory[]> = this.postService.getPostCategories();

  postForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    pageUrl: ['', Validators.required],
    repoUrl: ['', Validators.required],
    categories: [[], Validators.required],
  });

  submit() {
    const post: PostCreate = this.postForm.value;
    this.store.dispatch(new AddPost(post));
  }
}
