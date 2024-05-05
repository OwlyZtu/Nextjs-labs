// import { faker } from '@faker-js/faker';
// import { PrismaClient } from '@prisma/client';
const { faker } = require('@faker-js/faker');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const seedUsers = async (count = 1) => {
  const users = Array.from({ length: count }, () => ({
    email: faker.internet.email(),
    name: faker.person.fullName(),
    password: faker.internet.password(),
  }));

  await prisma.user.createMany({ data: users });
};

const seedPosts = async (count = 1) => {
  const users = await prisma.user.findMany({ select: { id: true } });

  const posts = Array.from({ length: count }, () => ({
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    authorId: users[Math.floor(Math.random() * users.length)].id,
  }));

  await prisma.post.createMany({ data: posts });
};

async function main() {
  console.log('Seeding database...');
  await seedUsers(10);
  await seedPosts(100);
  console.log('Database seeded!');
}

main().finally(async () => {
  await prisma.$disconnect();
});
