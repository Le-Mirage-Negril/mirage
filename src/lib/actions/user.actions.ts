"use server";
import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { z } from "zod";

const userSignInForm = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function signInWitCredentials(prevState: unknown, formData: FormData) {
  try {
    const user = userSignInForm.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    await signIn("credentials", user);
    return {
      success: true,
      message: "Sign in successful",
    };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return {
      success: false,
      message: "Invalid credentials",
    };
  }
}

export async function signOutUser() {
  await signOut();
}
