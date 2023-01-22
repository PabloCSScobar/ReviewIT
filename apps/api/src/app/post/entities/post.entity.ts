import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { PostCategory } from '../../post-category/entities/post-category.entity';
import { Answer } from './answer.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created: Date;

  @Column()
  repoUrl: string;

  @Column('text')
  description: string;

  @Column()
  pageUrl: string;

  @Column('int', { default: 0 })
  visits: number;

  @ManyToOne((type) => User, (user) => user.posts)
  author: User;

  @OneToMany(() => Answer, (answer) => answer.post)
  answers: Answer[];

  @ManyToMany((type) => PostCategory)
  @JoinTable()
  categories: PostCategory[];
}
