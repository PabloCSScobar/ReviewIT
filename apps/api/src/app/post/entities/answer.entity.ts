import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { ReviewedCategory } from './reviewed-category.entity';
@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created: Date;

  @Column('text')
  description: string;

  @Column()
  isTopAnswer: boolean;

  @ManyToOne(() => User, (user) => user.answers)
  author: User;

  @OneToMany(() => ReviewedCategory, (category) => category.answer)
  reviewedCategories: ReviewedCategory[];
}
