"use client"

import FooterLink from "@/components/forms/FooterLink"
import InputFields from "@/components/forms/InputField"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"


const SignIn = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: "onBlur"
  })

  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log(data);

    } catch (error) {
      console.error(error);

    }
  }

  return (
    <>
      <h1 className="form-title">Log In Your Account</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        <InputFields
          name="email"
          label="Email"
          placeholder="Enter your email"
          register={register}
          error={errors.email}
          validation={{ required: 'Email is required', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email address is required" }}
        />

        <InputFields
          name="password"
          label="Password"
          placeholder="Password is required"
          type="password"
          register={register}
          error={errors.password}
          validation={{ required: 'Password is required', minLength: 8 }}
        />

        <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5 ">
          {isSubmitting ? "Signing In" : "Sign In"}
        </Button>

        <FooterLink text="Don't have an accoutn?" linkText="Create an account" href="/sign-up" />
      </form>
    </>
  )
}

export default SignIn