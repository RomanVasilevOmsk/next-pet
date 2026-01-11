import prisma from "./prisma";

export async function getUserFromDb(email: string) {
  const user = await prisma.user.findFirst({
    where: { email },
  });
  return user;
}
