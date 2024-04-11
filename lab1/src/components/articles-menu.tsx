'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@scss/menu.module.scss';


export default function ArticlesMenu() {
  const pathname = usePathname();
  
  return (
    <div className={styles.menu}>
      <Link
        className={`${styles.link} ${pathname === '/articles/create' ? styles.active : ''}`}
        href='/articles/create'
      >
        Create article
      </Link>
      <Link
        className={`${styles.link} ${pathname === '/articles/favorite' ? styles.active : ''}`}
        href='/articles/favorite'
      >
        Favorite articles
      </Link>
    </div>
  ); 
}
