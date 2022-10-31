import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post, PostDetail } from '../models/post';
import { MOCK_POSTS } from '../models/posts_mock';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private POST_LIST_MOCK: Post[] = MOCK_POSTS;
  private MOCK_POST_DETAL: PostDetail = {
    id: 1,
    categories: [
      {
        id: 1,
        name: 'Code quality',
      },
      {
        id: 2,
        name: 'Design',
      },
      {
        id: 3,
        name: 'Performance',
      },
    ],
    created: '02.12.2020',
    has_top_answer: true,
    description: 'Lorem test impsum test',
    author: {
      id: 1,
      username: 'Jan Kowalski',
      reputation: 1200,
      avatar_link:
        'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=WinkWacky&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=Yellow',
    },
    author_last_activity: {
      author: {
        id: 1,
        username: 'Jan Kowalski',
        reputation: 1200,
        avatar_link:
          'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=WinkWacky&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=Yellow',
      },
      created: '02.14.2022',
      type: 'created',
    },
    post_last_activity: {
      author: {
        id: 1,
        username: 'Jan Kowalski',
        reputation: 1200,
        avatar_link:
          'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=WinkWacky&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=Yellow',
      },
      created: '02.14.2022',
      type: 'created',
    },
    rank: 4.2,
    title: 'My new special Project',
    visits: 2,
    page_url: 'www.google.com',
    repo_url: 'www.github.com',
    answers: [
      {
        id: 1,
        created: '20.12.2022',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis beatae itaque sunt nihil cum amet aliquam, sapiente asperiores. Ex ratione consequuntur vero veritatis et ab deserunt incidunt nisi est quod? Beatae suscipit praesentiu ',
        is_top_answer: true,
        rank: 5,
        author_last_activity: {
          author: {
            id: 1,
            username: 'Jan Kowalski',
            reputation: 1200,
            avatar_link:
              'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=WinkWacky&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=Yellow',
          },
          created: '20.12.2022',
          type: 'created',
        },
        reviewed_categories: [
          {
            id: 1,
            category: {
              id: 1,
              name: 'Design',
            },
            rank: 5,
            review_nodes: [
              {
                id: 1,
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam nostrum doloribus atque quae nam dicta consequatur rem dolore deleniti libero sed neque, blanditiis amet soluta explicabo laudantium molestiae! Beatae .Sapiente, delectus neque maiores non aut obcaecati ea beatae ad placeat corrupti consequatur et temporibus nobis quibusdam autem pariatur soluta officiis dolore qui distinctio porro harum, impedit laborum. Ea, iste.',
                type: 'pro',
              },
              {
                id: 2,
                description: 'not great',
                type: 'con',
              },
            ],
          },
          {
            id: 2,
            category: {
              id: 1,
              name: 'SEO',
            },
            rank: 5,
            review_nodes: [
              {
                id: 1,
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam nostrum doloribus atque quae nam dicta consequatur rem dolore deleniti libero sed neque, blanditiis amet soluta explicabo laudantium molestiae! Beatae .Sapiente, delectus neque maiores non aut obcaecati ea beatae ad placeat corrupti consequatur et temporibus nobis quibusdam autem pariatur soluta officiis dolore qui distinctio porro harum, impedit laborum. Ea, iste.',
                type: 'pro',
              },
              {
                id: 2,
                description: 'not great',
                type: 'con',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        created: '20.12.2022',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis beatae itaque sunt nihil cum amet aliquam, sapiente asperiores. Ex ratione consequuntur vero veritatis et ab deserunt incidunt nisi est quod? Beatae suscipit praesentiu ',
        is_top_answer: false,
        rank: 5,
        author_last_activity: {
          author: {
            id: 1,
            username: 'Jan Kowalski',
            reputation: 1200,
            avatar_link:
              'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=WinkWacky&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=Yellow',
          },
          created: '20.12.2022',
          type: 'created',
        },
        reviewed_categories: [
          {
            id: 1,
            category: {
              id: 1,
              name: 'Design',
            },
            rank: 5,
            review_nodes: [
              {
                id: 1,
                description: 'great',
                type: 'pro',
              },
              {
                id: 2,
                description: 'not great',
                type: 'con',
              },
            ],
          },
        ],
      },
    ],
  };
  constructor() {}

  getPosts(
    page: number,
    searchedTerm: string,
    postFilter: string,
    categoryFilter: string | null
  ): Observable<Post[]> {
    console.log(
      `searching posts page:${[
        page,
      ]} with searchFilter: ${searchedTerm}, postFilter: ${postFilter} and categoryFilter: ${categoryFilter}`
    );
    return of(this.POST_LIST_MOCK);
  }

  getPostDetails(postId: number): Observable<PostDetail> {
    return of(this.MOCK_POST_DETAL);
  }
}
