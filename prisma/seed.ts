import { Prisma, PrismaClient } from '../generated/client/deno/edge.ts';
import { load } from 'https://deno.land/std@0.179.0/dotenv/mod.ts';

const envVars = await load();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});

const dinasourData: Prisma.DinosaurCreateInput[] = [
  {
    name: 'Dinomino',
    description: 'Like an engry bird',
  },
  {
    name: 'Abelisaurus',
    description: 'Abelis was reconstructed from a single skull',
  },
  {
    name: 'Acophontolis',
    description: 'Amazing and loving ',
  },
];

for (const u of dinasourData) {
  const dinasour = await prisma.dinosaur.create({ data: u });
  console.log(`Created dinasour with id: ${dinasour.id}`);
}
console.log('seeding finished');

await prisma.$disconnect();
