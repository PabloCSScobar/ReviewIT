import { Answer } from './answer';
import { PostActivity } from './post-activity';
import { PostCategory } from './post-category';
import { PostUser } from './post-user';

export type Post = {
  id: number;
  created: string;
  title: string;
  pageUrl: string;
  repoUrl: string;
  rank: number;
  visits: number;
  hasTopAnswer: boolean;
  author: PostUser;
  answersAmount: number;
  categories: PostCategory[];
};

export type PostDetail = Omit<Post, 'answers'> & {
  answers: Answer[];
  description: string;
};
