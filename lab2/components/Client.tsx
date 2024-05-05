'use client';

export default function Client() {
  console.log(
    'NEXT_PUBLIC_ANALYTICS_ID: ',
    process.env.NEXT_PUBLIC_ANALYTICS_ID
  );

  const send = async () => {
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
      method: 'POST',
      body: JSON.stringify({
        name: 'John Doe',
        email: 'qwe@email.com',
        password: 'pass1234',
      }),
    });
    const data = await user.json();
    console.log(data);
  };

  return (
    <div>
      <button onClick={send}>Send</button>
    </div>
  );
}
