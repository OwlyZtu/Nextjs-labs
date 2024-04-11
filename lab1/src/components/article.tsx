import { ArticleT } from '@/types/article';
import Link from 'next/link';

interface ArticleProps {
  article: ArticleT;
}

export default function Article({ article: { id, title, body } }: ArticleProps) {
  return (
    <div className='m-2 p-2 rounded-lg'>
      <Link href={`/articles/${id}`}><p className='text-primary font-semibold'>№{id}. {title}</p></Link>
      <p className='mt-2 italic'>{body}</p>
    </div>
  );
}