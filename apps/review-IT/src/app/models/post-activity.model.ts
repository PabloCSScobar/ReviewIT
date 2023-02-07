import { User } from './user.model';

export type PostActivity = {
  type: ActivityType;
  created: string;
  author: User;
};

export type ActivityType = 'created' | 'answered' | 'modified';
