import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Post } from '../../post/entities/post.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reputation: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  avatar_link: string;

  @OneToMany((type) => Post, (post) => post.author)
  posts: Post;
}
