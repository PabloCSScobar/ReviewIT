import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../../environments/environment';
import { Answer, AnswerCreate } from '../../models/answer.model';

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  private http = inject(HttpClient);
  private apiUrl = env.apiUrl;

  getAnswers(postId: number): Observable<Answer[]> {
    return this.http.get<Answer[]>(`${this.apiUrl}posts/${postId}/answers`);
  }

  createAnswer(newAnswer: AnswerCreate, postId: number): Observable<Answer> {
    return this.http.post<Answer>(
      `${this.apiUrl}posts/${postId}/answers`,
      newAnswer
    );
  }

  markAnswerAsTop(answerId: number, postId: number): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}posts/${postId}/answers/${answerId}/mark_as_top`,
      {}
    );
  }
}
