import Client from '@/components/Client';

export default async function Home() {
  console.log('POSTGRES_URL: ', process.env.POSTGRES_URL);
  console.log('POSTGRES_USER: ', process.env.POSTGRES_USER);

  const users = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`);
  const data = await users.json();

  console.log(data);

  return (
    <main>
      <Client />
    </main>
  );
}
