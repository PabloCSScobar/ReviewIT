import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PostCategory } from '../../post-category/entities/post-category.entity';
import { User } from '../../user/entities/user.entity';
import { Answer } from './answer.entity';
import { ReviewedCategoryNode } from './reviewed-category-node.entity';
@Entity()
export class ReviewedCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('float')
  rank: number;

  @ManyToOne(() => PostCategory, (category) => category.reviewedCategories)
  category: PostCategory;

  @OneToMany(() => ReviewedCategoryNode, (node) => node.reviewCategory)
  reviewCategoryNodes: ReviewedCategoryNode[];

  @ManyToOne(() => Answer, (answer) => answer.reviewedCategories)
  answer: Answer;
}
