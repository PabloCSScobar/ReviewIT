import { Answer } from './answer.model';
import { PostCategory } from './post-category.model';
import { User } from './user.model';

export type Post = {
  id: number;
  created: string;
  title: string;
  pageUrl: string;
  repoUrl: string;
  rank: number;
  visits: number;
  hasTopAnswer: boolean;
  author: User;
  answersAmount: number;
  categories: PostCategory[];
};

export type PostCreate = {
  title: string;
  description: string;
  pageUrl: string;
  repoUrl: string;
  categories: number[];
}

export type PostDetail = Omit<Post, 'answers'> & {
  answers: Answer[];
  description: string;
};
