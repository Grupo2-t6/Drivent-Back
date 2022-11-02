import { conflictError, notFoundError } from '@/errors';
import activityRepository from '@/repositories/activity-repository';
import { Activities } from '@prisma/client';
import { UserActivities } from '@prisma/client';

async function validateVacancieActivityByTime(userId: number, activityId: number) {
  const isActivityExistent = await activityRepository.isActivityExistent(activityId);
  if (isActivityExistent === null) throw notFoundError();
  await isTimeValidToChooseActivity(isActivityExistent, userId);
}

export type TuserActivityPostType = Omit<UserActivities, 'id'>;

async function insertActivity(newActivityid: number, userId: number) {
  const data: TuserActivityPostType = {
    userId: userId,
    activityId: newActivityid,
  };
  await activityRepository.AddNewActivityAtUserById(data);
}

async function isTimeValidToChooseActivity(newActivity: Activities, userId: number) {
  const userActivities = await activityRepository.userActivities(userId);
  if (userActivities === null) insertActivity(newActivity.id, userId);
  for (const activityChoosed of userActivities) {
    const conditional1 = newActivity.startTime === activityChoosed.Activity.startTime;
    if (conditional1 && newActivity.date === activityChoosed.Activity.date) {
      throw conflictError('horários entram em conflito');
    }
  }
  insertActivity(newActivity.id, userId);
}

const activitiesService = {
  validateVacancieActivityByTime,
};

export default activitiesService;
