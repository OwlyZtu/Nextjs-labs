'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@scss/menu.module.scss';


export default function MainMenu() {
  const pathname = usePathname();
  
  return (
    <div className={styles.menu}>
      <Link
        className={`${styles.link} ${pathname === '/articles' ? styles.active : ''}`}
        href='/articles'
      >
          Articles
      </Link>
      <Link
        className={`${styles.link} ${pathname === '/profile/settings' ? styles.active : ''}`}
        href='/profile/settings'
      >
        Profile settings
      </Link>
      <Link
        className={`${styles.link} ${pathname === '/profile/security' ? styles.active : ''}`}
        href='/profile/security'
      >
        Profile security
      </Link>
    </div>
  ); 
}
