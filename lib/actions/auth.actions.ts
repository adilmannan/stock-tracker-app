"use server";

import { getAuth } from "@/lib/better-auth/auth";
import { inngest } from "@/lib/inngest/client";
import { success } from "better-auth";
import { headers } from "next/headers";


export const signUpWithEmail = async ({ email, password, fullName, country, investmentGoals, riskTolerance, preferredIndustry }: SignUpFormData) => {
  try {
    const auth = await getAuth();
    const response = await auth.api.signUpEmail({ body: { email, password, name: fullName } })

    if (response) {
      await inngest.send({
        name: 'app/user.created',
        data: { email, name: fullName, country, investmentGoals, riskTolerance, preferredIndustry }
      })
    }
    return { success: true, data: response }
  } catch (error) {
    console.log("Signup failed", error);
    return {
      success: false, error: "Signup failed"
    }

  }
}

export const signInWithEmail = async ({ email, password }: SignInFormData) => {
  try {
    const auth = await getAuth();
    const response = await auth.api.signInEmail({ body: { email, password } })

    
    return { success: true, data: response }
  } catch (error) {
    console.log("Sign In failed", error);
    return {
      success: false, error: "Sign In failed"
    }

  }
}

export const signOut = async () => {
  try {
    const auth = await getAuth();
    await auth.api.signOut({ headers: await headers()})
  } catch (error) {
    console.log("Signout failed", error);
    return { success: false, error: "Sign out failed" }
  }
}