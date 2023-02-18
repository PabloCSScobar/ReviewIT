export type PaginationOptions = {
  page: number;
  itemsPerPage: number;
};

export type Pagination = {
  total: number;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
}

export type PaginateResponse<T> = {
  results: T[];
  pagination: Pagination;
};

export enum PostsFilter {
  LATEST = 'latest',
  HOT = 'hot',
  HIGHEST_RANK = 'highest_rank',
  MOST_VISITS = 'most_visits',
  MOST_ANSWERS = 'most_answers',
  NO_ANSWER = 'no_answer',
}
