import { conflictError, notFoundError } from '@/errors';
import activityRepository from '@/repositories/activity-repository';
import { Activities } from '@prisma/client';

async function validateVacancieActivityByTime(userId: number, activityId: number) {
  const isActivityExistent = await activityRepository.isActivityExistent(activityId);
  if (isActivityExistent === null) throw notFoundError();
  await isTimeValideToChooseActivity(isActivityExistent);
}
async function isTimeValideToChooseActivity(activity: Activities) {
  const time = Number(activity.startTime[0] + activity.startTime[1]);
  const firstSelected = [
    {
      id: 1,
      date: 'sexta,22/10',
      vacancies: 27,
      startTime: '09:00',
      name: 'MINECRAFT',
      trailId: 1,
      finalTime: '10:00',
    },
    {
      id: 4,
      date: 'sexta,23/10',
      vacancies: 27,
      startTime: '10:00',
      name: 'MINECRAFT3',
      trailId: 1,
      finalTime: '11:00',
    },
  ];
  for (const activityChoosed of firstSelected) {
    const selectedActivityTime = Number(activityChoosed.startTime[0] + activityChoosed.startTime[1]);
    if (time === selectedActivityTime && activity.date === activityChoosed.date) {
      throw conflictError('horários entram em conflito');
    }
  }
}

const activitiesService = {
  validateVacancieActivityByTime,
};

export default activitiesService;
