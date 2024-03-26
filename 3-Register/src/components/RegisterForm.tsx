"use client";

import { Input } from "./Input";
import {
  EmailIcon,
  LockIcon,
  PasswordInvisibleIcon,
  PasswordVisibleIcon,
  UserIcon,
} from "@/ui/Icons";
import { RegisterSchema } from "@/constants/inputValidations";
import type { RegisterFormType } from "@/constants/inputValidations";
import { useState } from "react";
import { Button } from "./Button";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

export const RegisterForm = () => {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>({ resolver: zodResolver(RegisterSchema) });

  return (
    <form
      action=""
      method="POST"
      className="flex flex-col gap-4"
      onSubmit={handleSubmit((data) =>
        router.push(`/signed-in/${data.username}`)
      )}
    >
      <Input
        PrimaryIcon={EmailIcon}
        type="email"
        label="Email"
        errorMessage={errors.email?.message}
        placeholder="Enter your email address"
        {...register("email")}
      />

      <Input
        PrimaryIcon={UserIcon}
        type="text"
        label="Username"
        placeholder="Enter your User name"
        errorMessage={errors.username?.message}
        {...register("username")}
      />

      <Input
        PrimaryIcon={LockIcon}
        type={isPasswordVisible ? "text" : "password"}
        label="Password"
        placeholder="Enter your Password"
        errorMessage={errors.password?.message}
        {...register("password")}
        SecondaryIcon={
          isPasswordVisible ? PasswordVisibleIcon : PasswordInvisibleIcon
        }
        onSecondaryIconClick={() =>
          setIsPasswordVisible((isPasswordVisible) => !isPasswordVisible)
        }
      />

      <Input
        PrimaryIcon={LockIcon}
        type={isConfirmVisible ? "text" : "password"}
        label="Confirm Password"
        placeholder="Confirm your Password"
        errorMessage={errors.confirm?.message}
        {...register("confirm")}
        SecondaryIcon={
          isConfirmVisible ? PasswordVisibleIcon : PasswordInvisibleIcon
        }
        onSecondaryIconClick={() =>
          setIsConfirmVisible((isConfirmVisible) => !isConfirmVisible)
        }
      />

      <Button
        className={twMerge(
          "text-white py-3 rounded-full bg-gray-400",
          errors && "bg-red-500"
        )}
      >
        <span>Register</span>
      </Button>
    </form>
  );
};
