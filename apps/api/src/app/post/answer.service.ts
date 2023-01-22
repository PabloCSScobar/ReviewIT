import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { PostCategory } from '../post-category/entities/post-category.entity';
import { User } from '../user/entities/user.entity';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { CreateReviewedCategory } from './dto/create-reviewed-category-node.dto';
import { CreateReviewedCategoryNode } from './dto/create-reviewed-category.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { Answer } from './entities/answer.entity';
import { Post } from './entities/post.entity';
import { ReviewedCategoryNode } from './entities/reviewed-category-node.entity';
import { ReviewedCategory } from './entities/reviewed-category.entity';
import { PostService } from './post.service';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer) private answerRepository: Repository<Answer>,
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(ReviewedCategory)
    private rcRepository: Repository<ReviewedCategory>,
    @InjectRepository(PostCategory)
    private postCatRepository: Repository<PostCategory>,
    @InjectRepository(ReviewedCategoryNode)
    private rcnRepository: Repository<ReviewedCategoryNode>,
    private postService: PostService
  ) {}

  async create(postId: number, createAnswerDto: CreateAnswerDto) {
    const post = await this.postService.getPostById(postId);
    const author = await this.userRepository.findOneBy({ id: 1 });
    if (!author)
      throw new HttpException('User Not found', HttpStatus.BAD_REQUEST);

    const categories = await this.createReviewedCategories(
      createAnswerDto.reviewedCategories
    );

    const newAnswer = {
      ...createAnswerDto,
      author,
      post,
      reviewedCategories: categories,
    };
    const { id } = await this.answerRepository.save(newAnswer);
    return await this.answerRepository.findOne({
      where: { id },
    });
  }

  async getAnswers(postId: number) {
    return await this.answerRepository.find({
      where: { post: { id: postId } },
      relations: [
        'author',
        'reviewedCategories',
        'reviewedCategories.category',
        'reviewedCategories.reviewCategoryNodes',
      ],
    });
  }

  deleteAnswer(answerId: number) {
    return this.answerRepository.delete(answerId);
  }

  calculateAnswerRankBasedOnReviewedCategories(
    reviewedCategories: ReviewedCategory[]
  ) {
    let rank = 0;
    reviewedCategories.forEach((category) => {
      rank += category.reviewCategoryNodes.length;
    });
    return rank;
  }

  async markAnswerAsTop(answerId: number) {
    await this.answerRepository.update(
      { id: Not(answerId) },
      { isTopAnswer: false }
    );
    return await this.answerRepository.update(answerId, { isTopAnswer: true });
  }

  async createReviewedCategories(reviewCategories: CreateReviewedCategory[]) {
    const categories = [];
    for (let i = 0; i < reviewCategories.length; i++) {
      const node = await this.createReviewedCategory(reviewCategories[i]);
      categories.push(node);
    }
    return categories;
  }

  async createReviewedCategory(reviewCategory: CreateReviewedCategory) {
    const nodes = await this.createReviewedCategoryNodes(
      reviewCategory.reviewCategoryNodes
    );
    const postCategory = await this.postCatRepository.findOneBy({
      id: reviewCategory.category,
    });
    if (!postCategory)
      throw new HttpException('PostCategory Not found', HttpStatus.BAD_REQUEST);

    const newCategory = await this.rcRepository.create({
      ...reviewCategory,
      reviewCategoryNodes: nodes,
      category: postCategory,
    });
    await this.rcRepository.save(newCategory);
    return newCategory;
  }

  async createReviewedCategoryNode(
    reviewCategoryNode: CreateReviewedCategoryNode
  ) {
    const node = await this.rcnRepository.create(reviewCategoryNode);
    await this.rcnRepository.save(node);
    return node;
  }

  async createReviewedCategoryNodes(
    reviewCategoryNodes: CreateReviewedCategoryNode[]
  ) {
    const nodes = [];
    for (let i = 0; i < reviewCategoryNodes.length; i++) {
      const node = await this.createReviewedCategoryNode(
        reviewCategoryNodes[i]
      );
      nodes.push(node);
    }
    return nodes;
  }
}
