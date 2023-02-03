import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from '../../post/entities/post.entity';
import { ReviewedCategory } from '../../post/entities/reviewed-category.entity';

@Entity()
export class PostCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToMany(() => Post, post => post.categories)
  posts: Post[];

  @ManyToOne(
    () => ReviewedCategory,
    (revievedCategory) => revievedCategory.category
  )
  reviewedCategories: ReviewedCategory[];
}
