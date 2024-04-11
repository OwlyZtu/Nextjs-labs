import type { Metadata } from 'next';
import { M_PLUS_1_Code } from 'next/font/google';
import '@scss/tailwind.scss';
import styles from '@scss/globals.module.scss';

const font = M_PLUS_1_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lab 1 App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${font.className} ${styles.centerContainer}`}>
        {children}
      </body>
    </html>
  );
}
