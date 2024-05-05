import prisma from '@/db';
import { NextResponse } from 'next/server';

export async function PUT(
  request: Request,
  context: {
    params: {
      id: string;
    };
  }
) {
  const { id } = context.params;
  const body = await request.json();

  const user = await prisma.user.update({
    where: { id },
    data: body,
  });

  return NextResponse.json(user);
}

export async function DELETE(
  request: Request,
  context: {
    params: {
      id: string;
    };
  }
) {
  const { id } = context.params;
  const body = await request.json();

  const user = await prisma.user.delete({ where: { id } });

  return NextResponse.json(user);
}
