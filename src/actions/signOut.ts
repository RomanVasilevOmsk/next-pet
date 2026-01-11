"use server";

import { signOut } from "@/auth/auth";

export async function signOutAction() {
  try {
    const res = await signOut({ redirect: false });
    return res;
  } catch (error) {
    console.error(error);
    return { error: "Failed to sign out." };
  }
}
