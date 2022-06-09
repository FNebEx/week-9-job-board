export const getJobs = async (prisma) => {
  const jobs = await prisma.job.findMany({
    where: { published: true },
    orderBy: [
      { id: 'desc' }
    ],
    include: { author: true }
  });

  return jobs
}

export const getJob = async (id, prisma) => {
  const job = await prisma.job.findUnique({
    where: { id: parseInt(id) },
    include: { author: true }
  });

  return job;
}

export const getCompany = async (companyId, prisma) => {
  const user = await prisma.user.findUnique({
    where: { id: companyId }
  });

  return user;
}

export const getCompanyJob = async (companyId, prisma) => {
  const jobs = await prisma.job.findMany({
    where: { authorId: companyId, published: true },
    orderBy: [
      { id: 'desc' }
    ],
    include: { author: true }
  });

  return jobs;
}