import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';
const prisma = new PrismaClient();

async function main() {
  let event = await prisma.event.findFirst();
  if (!event) {
    event = await prisma.event.create({
      data: {
        title: 'Driven.t',
        logoImageUrl: 'https://files.driveneducation.com.br/images/logo-rounded.png',
        backgroundImageUrl: 'linear-gradient(to right, #FA4098, #FFD77F)',
        startsAt: dayjs().toDate(),
        endsAt: dayjs().add(21, 'days').toDate(),
      },
    });
  }

  let trails: any = await prisma.trails.findFirst();
  if (!trails) {
    trails = await prisma.trails.createMany({
      data: [{
        name: 'Auditório Principal',
      },
      {
        name: 'Auditório Lateral',
      },
      {
        name: 'Sala de Workshop',
      },
    ],
    });
  }

  console.log({ trails });

  let activities: any = await prisma.activities.findFirst();
  if (!activities) {
    activities = await prisma.activities.createMany({
      data: [{
        name: 'GamePlay',
        date: 'Sexta, 22/10',
        vacancies: 15,
        startTime: '10:00',
        finalTime: '1100',
        trailId: 1
      },
      {
        name: 'GamePlay',
        date: 'Sexta, 22/10',
        vacancies: 15,
        startTime: '13:00',
        finalTime: '1400',
        trailId: 1
      },
      {
        name: 'Baile',
        date: 'Sexta, 22/10',
        vacancies: 15,
        startTime: '11:00',
        finalTime: '13:00',
        trailId: 1
      },
      {
        name: 'GamePlay',
        date: 'Sexta, 22/10',
        vacancies: 15,
        startTime: '10:00',
        finalTime: '1100',
        trailId: 2
      },
      {
        name: 'GamePlay',
        date: 'Sexta, 22/10',
        vacancies: 15,
        startTime: '13:00',
        finalTime: '14:00',
        trailId: 2
      },
      {
        name: 'GamePlay',
        date: 'Sexta, 22/10',
        vacancies: 15,
        startTime: '10:00',
        finalTime: '1100',
        trailId: 1
      },
      {
        name: 'Almoço',
        date: 'Sexta, 22/10',
        vacancies: 15,
        startTime: '13:00',
        finalTime: '14:00',
        trailId: 3
      },
    ],
      
    });
  }
  console.log({ activities });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
