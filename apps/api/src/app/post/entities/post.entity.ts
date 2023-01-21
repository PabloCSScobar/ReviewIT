import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { PostCategory } from '../../post-category/entities/post-category.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created: Date;

  @Column()
  repo_url: string;

  @Column('text')
  description: string;

  @Column()
  page_url: string;

  @Column('int', { default: 0 })
  visits: number;

  @ManyToOne((type) => User, (user) => user.posts)
  author: User;

  @ManyToMany((type) => PostCategory)
  @JoinTable()
  categories: PostCategory[];
}
