import { Component, OnInit } from '@angular/core';
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
import { Observable, of } from 'rxjs';
import { PostCategory } from '../models/post-category';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { GITHUB_ICON } from '../../../../assets/icons';
import { MatButtonModule } from '@angular/material/button';

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
  postForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    page_url: ['', Validators.required],
    repo_url: ['', Validators.required],
    categories: [[], Validators.required],
  });

  postCategories$: Observable<PostCategory[]> = of([
    {
      id: 1,
      name: 'Design',
    },
    {
      id: 2,
      name: 'SEO',
    },
    {
      id: 3,
      name: 'Accessibility',
    },
    {
      id: 4,
      name: 'RWD',
    },
    {
      id: 5,
      name: 'Code Quality',
    },
    {
      id: 6,
      name: 'Performance',
    },
  ]);

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private fb: FormBuilder
  ) {
    iconRegistry.addSvgIconLiteral(
      'github',
      sanitizer.bypassSecurityTrustHtml(GITHUB_ICON)
    );
  }

  submit() {
    console.log(this.postForm);
  }
}
