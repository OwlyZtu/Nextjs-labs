import Article from '@/components/article';
import { ArticleT } from '@/types/article';
import styles from '@scss/globals.module.scss';


export default async function ArticlesPage() {
  const articles: ArticleT[] = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json());

  return (
    <>
      <h1 className={styles.title}>Articles page</h1>
      <div className='flex flex-col justify-start p-4'>
        {articles.map((el: ArticleT) =>
          <Article article={el} key={el.id} />
        )}
      </div>
    </>
  );
}
