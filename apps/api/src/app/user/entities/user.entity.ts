import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Answer } from '../../post/entities/answer.entity';
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
  avatarLink: string;

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];

  @OneToMany(() => Answer, (answer) => answer.author)
  answers: Answer[];
}
