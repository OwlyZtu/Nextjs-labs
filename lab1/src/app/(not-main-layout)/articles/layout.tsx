import ArticlesMenu from '@/components/articles-menu';
import type { Metadata } from 'next';
import '@scss/tailwind.scss';
import styles from '@scss/globals.module.scss';

export const metadata: Metadata = {
  title: 'Lab 1 Articles',
};

export default function ArticlesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.centerContainer}>
      <ArticlesMenu />
      
      {children}
    </div>
  );
}
