import { prisma } from '@/config';
import { TuserActivityPostType } from '@/services/activities-service';

async function isActivityExistent(id: number) {
  return prisma.activities.findFirst({
    where: { id },
  });
}

async function AddNewActivityAtUserById(data: TuserActivityPostType) {
  return prisma.userActivities.create({
    data,
  });
}
async function userActivities(userId: number) {
  return prisma.userActivities.findMany({
    where: { userId },
    select: {
      Activity: {
        select: {
          id: true,
          name: true,
          finalTime: true,
          startTime: true,
          vacancies: true,
          date: true,
        },
      },
    },
  });
}

async function getVacancies(id: number) {
  return prisma.activities.findFirst({
    where: { id },
  });
}

async function enrolled(id: number) {
  return prisma.userActivities.count({
    where: { activityId: id },
  });
}

 async function allActivities(date: string){
  const response = await prisma.activities.findMany({
    where:{
      date
    }
  })

  return response
}

const activityRepository = {
  isActivityExistent,
  userActivities,
  AddNewActivityAtUserById,
  getVacancies,
  enrolled,
  allActivities
};

export default activityRepository;
