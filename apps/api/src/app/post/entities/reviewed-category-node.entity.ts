import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ReviewedCategory } from './reviewed-category.entity';
@Entity()
export class ReviewedCategoryNode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  description: string;

  @Column()
  type: 'con' | 'pro';

  @ManyToOne(() => ReviewedCategory, (category) => category.reviewCategoryNodes)
  reviewCategory: ReviewedCategory;
}
