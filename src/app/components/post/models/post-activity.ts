import { PostUser } from './post-user';

export type PostActivity = {
  type: ActivityType;
  created: string;
  author: PostUser;
};

export type ActivityType = 'created' | 'answered' | 'modified';
