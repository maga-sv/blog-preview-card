import { defineStore } from 'pinia'
import illustrationArticle from '@/assets/images/illustration-article.svg';
import imageAvatar from '@/assets/images/image-avatar.webp';

export const useBlogStore = defineStore('blog', {
  state: () => ({
    blog: {
      backgroundImg: illustrationArticle,
      type: 'Learning',
      date: '21 Dec 2023',
      title: 'HTML & CSS foundations',
      text: 'These languages are the backbone of every website, defining structure, content, and presentation.',
      user: {
        name: 'Greg Hooper',
        ava: imageAvatar,
      },
    },
  }),
});