import Client from '@/components/Client';

export default async function Home() {
  const users = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`);
  const data = await users.json();

  console.log('db user: ', data[0]);

  console.log('DATABASE_URL: ', process.env.DATABASE_URL);
  console.log('POSTGRES_USER: ', process.env.POSTGRES_USER);

  return (
    <main>
      <Client />
    </main>
  );
}
