import { prisma } from '@/config';

async function isActivityExistent(id: number) {
  return prisma.activities.findFirst({
    where: { id },
  });
}

const activityRepository = {
  isActivityExistent,
};

export default activityRepository;
