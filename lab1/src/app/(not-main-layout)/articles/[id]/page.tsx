import Article from '@/components/article';
import { ArticleT } from '@/types/article';
import { CommentT } from '@/types/comment';
import styles from '@scss/globals.module.scss';

export async function generateStaticParams() {
  const articles: ArticleT[] = [];

  for(let i = 1; i <= 10; i++) {
    articles.push(await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
      .then((res) => res.json()));
  }
 
  return articles.map((article) => ({
    id: article.id.toString(),
  }));
}

interface ArticlePageProps {
  params: {
    id: string;
  }
}

export default async function ArticlesPage({ params: { id } }: ArticlePageProps) {
  const articleRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const article: ArticleT = await articleRes.json();

  const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`);
  const comments: CommentT[] = await commentsRes.json();

  return (
    <>
      <h1 className={styles.title}>One article page</h1>
      <Article article={article} />
      <p>Comments:</p>
      
      <div className='flex flex-col justify-start p-4'>
        {comments.map((comment) => 
          <div className='m-2 p-2 rounded-lg'>
            <p className='text-primary font-semibold'>{comment.name}</p>
            <p className='text-gray-600 font-semibold text-sm'>by {comment.email}</p>
            <p className='mt-2 italic'>{comment.body}</p>
          </div>
          
        )}
      </div>
    </>
  );
}
