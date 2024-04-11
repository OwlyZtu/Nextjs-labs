import Link from 'next/link';
import styles from '@scss/globals.module.scss';
import { Radio, Button } from 'antd';

export default function HomePage() {
  return (
    <main className='flex min-h-screen flex-col items-center p-52'>
      <h1 className={`${styles.title} m-0`}>Main page</h1>
      <div className='flex'>
        <Link href='/articles'>
          <Button className='m-2'>
          Articles
          </Button>
        </Link>
        <Link href='/profile/settings'>
          <Button className='m-2'>
            Profile settings
          </Button>
        </Link>
      </div>
    </main>
  );
}
