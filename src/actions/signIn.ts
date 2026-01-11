"use server";

import { signIn } from "@/auth/auth";

export async function signInWithCredentials(email: string, password: string) {
  try {
    const result = await signIn("credentials", {
      email,
      password,
    });
    return result;
  } catch (error) {
    console.error(error);
    return { error: "Invalid credentials." };
  }
}
