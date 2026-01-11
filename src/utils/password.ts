import bcrypt from "bcryptjs";

export const saltAndHashPassword = async (
  password: string,
): Promise<string> => {
  const salrRounds = 10;
  return await bcrypt.hash(password, salrRounds);
};
