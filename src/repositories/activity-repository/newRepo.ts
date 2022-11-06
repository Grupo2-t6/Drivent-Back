import { prisma } from '@/config';


export async function allActivities(){
    const response = await prisma.activities.findMany()
  
    return response
  }