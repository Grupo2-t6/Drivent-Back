import { conflictError, notFoundError } from '@/errors';
import activityRepository from '@/repositories/activity-repository';
import { Activities } from '@prisma/client';
import { UserActivities } from '@prisma/client';

async function PostActivity(userId: number, activityId: number) {
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
  for (const userActivity of userActivities) {
    const conditional1 = newActivity.startTime === userActivity.Activity.startTime;
    const conditional2 = newActivity.date === userActivity.Activity.date;
    if (conditional1 && conditional2) {
      throw conflictError('horários entram em conflito');
    }
  }
  insertActivity(newActivity.id, userId);
}

const activitiesService = {
  PostActivity,
};

export default activitiesService;
