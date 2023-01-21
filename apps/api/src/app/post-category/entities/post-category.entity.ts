import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ReviewedCategory } from '../../post/entities/reviewed-category.entity';

@Entity()
export class PostCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToOne(
    () => ReviewedCategory,
    (revievedCategory) => revievedCategory.category
  )
  reviewedCategories: ReviewedCategory[];
}
