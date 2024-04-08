import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { applicationIds, applicationType, reviwerEmail, mode, slug } =
      body.data;

    switch (applicationType) {
      case 'accepted': {
        const data = await prisma.$transaction(async (prismaClient) => {
          for (const id of applicationIds) {
            const application = await prismaClient.application.findFirst({
              where: {
                id: id,
              },
            });

            if (application?.affiliatedPersons) {
              const incentives = await Promise.all(
                application.affiliatedPersons.map(async (email) => {
                  const user = await prismaClient.user.findFirst({
                    where: {
                      email: email,
                    },
                  });

                  const incentive = await prismaClient.incentive.findFirst({
                    where: {
                      incentiveForId: user?.id,
                    },
                  });

                  return incentive;
                })
              );

              let commonAmount = 0.0;
              if (application.qIndex === 'Q1' || application.qIndex === 'Q2') {
                commonAmount = 25000.0 / parseInt(application.totalAuthors);
              } else {
                commonAmount = 20000.0 / parseInt(application.totalAuthors);
              }
              const amount = commonAmount.toString();
              const payments = await Promise.all(
                incentives.map(async (incentive, index) => {
                  const user = await prismaClient.user.findFirst({
                    where: {
                      email: application.affiliatedPersons[index],
                    },
                  });

                  const singlePayment = await prismaClient.payment.create({
                    data: {
                      amount: amount,
                      applicationId: application.id,
                      type: 'COMMON',
                      incentive: {
                        connect: {
                          id: incentive?.id,
                        },
                      },
                      userId: user?.id,
                    },
                  });

                  return singlePayment;
                })
              );

              const firstAuthor = await prismaClient.user.findFirst({
                where: {
                  email: application?.affiliatedPersons[0],
                },
              });

              if (firstAuthor?.id === application.correspondingAuthorId) {
                const bothPayment = await prismaClient.payment.create({
                  data: {
                    amount: '3000',
                    applicationId: application.id,
                    type: 'BOTH',
                    incentive: {
                      connect: {
                        id: incentives[0]?.id,
                      },
                    },
                    userId: firstAuthor?.id,
                  },
                });
                const totalPayments = {
                  ...payments,
                  bothPayment,
                };
              } else {
                const firstAuthorPayment = await prismaClient.payment.create({
                  data: {
                    amount: '2000',
                    applicationId: application.id,
                    type: 'FIRSTAUTHOR',
                    incentive: {
                      connect: {
                        id: incentives[0]?.id,
                      },
                    },
                    userId: firstAuthor?.id,
                  },
                });

                const incentive = await prismaClient.incentive.findFirst({
                  where: {
                    incentiveForId: application.correspondingAuthorId,
                  },
                });

                const correspondingAuthorPayment =
                  await prismaClient.payment.create({
                    data: {
                      amount: '2000',
                      applicationId: application.id,
                      type: 'CORRESPONDING',
                      incentive: {
                        connect: {
                          id: incentive?.id,
                        },
                      },
                      userId: application.correspondingAuthorId,
                    },
                  });
                const totalPayments = {
                  ...payments,
                  firstAuthorPayment,
                  correspondingAuthorPayment,
                };
              }
            }

            const updatedRecord = await prismaClient.application.update({
              where: {
                id: id,
              },
              data: {
                status: 'PAID',
              },
              select: {
                id: true,
                title: true,
                department: true,
                journalName: true,
                applicant: {
                  select: {
                    name: true,
                  },
                },
                affiliatedPersons: true,
                volAndDate: true,
                status: true,
                qIndex: true,
              },
            });
          }
        });
        return NextResponse.json({ message: 'success' });
      }
      case 'assigned': {
        switch (mode) {
          case 'reject': {
            const data = await prisma.$transaction(async (prismaClient) => {
              for (const id of applicationIds) {
                const updatedRecord = await prismaClient.application.update({
                  where: {
                    id: id,
                  },
                  data: {
                    status: 'REJECTED',
                  },
                  select: {
                    id: true,
                    title: true,
                    department: true,
                    journalName: true,
                    applicant: {
                      select: {
                        name: true,
                      },
                    },
                    affiliatedPersons: true,
                    volAndDate: true,
                    status: true,
                    qIndex: true,
                  },
                });
                const evaluation = await prismaClient.evaluation.findFirst({
                  where: {
                    applicationId: id,
                  },
                });
                if (evaluation) {
                  const updateEvaluation = await prismaClient.evaluation.update(
                    {
                      where: {
                        id: evaluation.id,
                      },
                      data: {
                        feedback: slug,
                      },
                    }
                  );
                }
              }
            });
            return NextResponse.json({ message: 'success' });
          }
          case 'accept': {
            const data = await prisma.$transaction(async (prismaClient) => {
              for (const id of applicationIds) {
                const updatedRecord = await prismaClient.application.update({
                  where: {
                    id: id,
                  },
                  data: {
                    status: 'ACCEPTED',
                  },
                  select: {
                    id: true,
                    title: true,
                    department: true,
                    journalName: true,
                    applicant: {
                      select: {
                        name: true,
                      },
                    },
                    affiliatedPersons: true,
                    volAndDate: true,
                    status: true,
                    qIndex: true,
                  },
                });
              }
            });
            return NextResponse.json({ message: 'success' });
          }
          case 'update': {
            //this is for updating reviewer
            return NextResponse.json({ message: 'success' });
          }
        }
        break;
      }

      case 'processing': {
        const data = await prisma.$transaction(async (prismaClient) => {
          for (const id of applicationIds) {
            const evaluation = await prismaClient.evaluation.create({
              data: {
                feedback: '',
                evaluatedBy: {
                  connect: {
                    email: reviwerEmail as string,
                  },
                },
                applicationId: id,
              },
              select: {
                id: true,
              },
            });

            const updatedRecord = await prismaClient.application.update({
              where: {
                id: id,
              },
              data: {
                status: 'ASSIGNED',
              },
              select: {
                id: true,
                title: true,
                department: true,
                journalName: true,
                applicant: {
                  select: {
                    name: true,
                  },
                },
                affiliatedPersons: true,
                volAndDate: true,
                status: true,
                qIndex: true,
              },
            });
          }
        });
        return NextResponse.json({ message: 'success' });
      }

      case 'pending': {
        const data = await prisma.$transaction(async (prismaClient) => {
          for (const id of applicationIds) {
            const updatedRecord = await prismaClient.application.update({
              where: {
                id: id,
              },
              data: {
                status: 'PROCESSING',
              },
              select: {
                id: true,
                title: true,
                department: true,
                journalName: true,
                applicant: {
                  select: {
                    name: true,
                  },
                },
                affiliatedPersons: true,
                volAndDate: true,
                status: true,
                qIndex: true,
              },
            });
          }
        });
        return NextResponse.json({ message: 'success' });
      }
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.message);
  }
}
