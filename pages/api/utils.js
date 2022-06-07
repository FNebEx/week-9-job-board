import prisma from "lib/prisma";
import { faker } from "@faker-js/faker";

const generateFakeJob = (user) => ({
  title: faker.company.catchPhrase(),
  description: faker.lorem.paragraphs(),
  author: {
    connectd: { id: user.id }
  }
})

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.end();

  if (res.body.task === 'clean_database') {
    await prisma.job.deleteMany({});
    await prisma.user.deleteMany({});
  }

  if (res.body.task === 'generate_one_job ') {
    const users = await prisma.user.findMany({
      where: {
        compnay: true
      }
    });

    await prisma.job.create({
      data: generateFakeJob(users[0])
    });
  }

  if (res.body.task === 'generate_users_and_jobs ') {
    for (let i = 0; i < 10; i++) {
      await prisma.user.create({
        data: {
          name: faker.internet.userName().toLowerCase(),
          email: faker.internet.email().toLowerCase(),
          company: faker.datatype.boolean()
        }
      });
    }

    const users = await prisma.user.findMany({
      where: { company: true }
    });

    users.forEach(async (user) => {
      await prisma.job.create({
        data: generateFakeJob(user)
      })
    });
  }

  res.end();
}