import { ArticleT } from '@/types/article';
import { Suspense } from 'react';
import Article from './article';

interface ArticleProps {
  article: ArticleT;
}

export default function FavoriteArticle({ article }: ArticleProps) {
  return (
    <Suspense fallback={<p>Article is loading...</p>} >
      <Article article={article} />
    </Suspense>
  );
}