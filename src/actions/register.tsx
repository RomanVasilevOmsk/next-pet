"use server";

import { IFormData } from "@/types/formData";
import prisma from "@/utils/prisma";
import { saltAndHashPassword } from "@/utils/password";

export async function registerUser(formData: IFormData) {
  if (formData.password !== formData.confirmPassword) {
    return { error: "Пароли не совпадают" };
  }

  if (formData.password.length < 6) {
    return { error: "Пароль должен быть не менее 6 символов" };
  }

  if (!formData.email.includes("@")) {
    return { error: "Емейл не валидный" };
  }
  const existUser = await prisma.user.findUnique({
    where: { email: formData.email },
  });

  console.log("formData", formData);
  console.log("existUser", existUser);

  if (existUser) {
    return { error: "Емейл уже зарегистрирован" };
  }

  try {
    const passwordHash = await saltAndHashPassword(formData.password);
    const user = await prisma.user.create({
      data: {
        email: formData.email,
        password: passwordHash,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}
