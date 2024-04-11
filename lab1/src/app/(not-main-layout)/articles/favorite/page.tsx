import FavoriteArticle from '@/components/favourite-article';
import { ArticleT } from '@/types/article';
import styles from '@scss/globals.module.scss';

async function FavoriteArticleFetch({id}: {id: number}) {
  const article: ArticleT = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json());

  return <FavoriteArticle article={article}/>  
}

export default async function FavoriteArticlesPage() {

  return (
    <>
      <h1 className={styles.title}>Favorite articles page</h1>
      <div className='flex flex-col justify-start p-4'>
        {[1, 2, 3].map(articleId => (
          <div key={articleId}>
            <FavoriteArticleFetch id={articleId} />
          </div>
        ))}
      </div>
    </>
  );
}