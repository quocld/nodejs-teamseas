import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  await prisma.donation.deleteMany();
  const alice = await prisma.donation.create({
    data: {
      email: 'quocle2208@gmail.com',
      displayName: 'quocle2208',
      count: 5,
    },
  });
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
