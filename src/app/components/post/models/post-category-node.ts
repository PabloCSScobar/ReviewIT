export type ReviewCategoryNode = {
  id?: number;
  type: ReviewCategoryNodeType;
  description: string;
};
export type ReviewCategoryNodeType = 'con' | 'pro';
