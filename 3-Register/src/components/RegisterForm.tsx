"use client";

import { Validation, useFormInput } from "@/hooks/useFormInput";
import { Input } from "./Input";
import {
  EmailIcon,
  LockIcon,
  PasswordInvisibleIcon,
  UserIcon,
} from "@/ui/Icons";
import {
  EmailValidation,
  PasswordValidation,
  UsernameValidation,
} from "@/constants";
import { useState } from "react";
import { Button } from "./Button";

export const RegisterForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const {
    value: email,
    setValue: setEmail,
    error: emailError,
  } = useFormInput(EmailValidation);

  const {
    value: username,
    setValue: setUsername,
    error: usernameError,
  } = useFormInput(UsernameValidation);

  const {
    value: password,
    setValue: setPassword,
    error: passwordError,
  } = useFormInput(PasswordValidation);

  const ConfirmValidation = [
    {
      validator: (confirm: string) => password === confirm,
      error: "Password and Confirm don't match",
    },
  ];

  const {
    value: confirmPassword,
    setValue: setConfirmPassword,
    error: confirmPasswordError,
  } = useFormInput(ConfirmValidation);

  return (
    <form action="" method="POST" className="flex flex-col gap-4">
      <Input
        PrimaryIcon={EmailIcon}
        errorMessage={emailError}
        value={email}
        setValue={setEmail}
        type="email"
        name="email"
        placeholder="Enter your email address"
      />

      <Input
        PrimaryIcon={UserIcon}
        value={username}
        setValue={setUsername}
        errorMessage={usernameError}
        type="test"
        name="username"
        placeholder="Enter your User name"
      />

      <Input
        PrimaryIcon={LockIcon}
        value={password}
        setValue={setPassword}
        errorMessage={passwordError}
        type={isPasswordVisible ? "text" : "password"}
        name="password"
        placeholder="Enter your Password"
        SecondaryIcon={PasswordInvisibleIcon}
        onSecondaryIconClick={() =>
          setIsPasswordVisible((isPasswordVisible) => !isPasswordVisible)
        }
      />

      <Input
        PrimaryIcon={LockIcon}
        value={confirmPassword}
        setValue={setConfirmPassword}
        errorMessage={confirmPasswordError}
        type={isConfirmVisible ? "text" : "password"}
        name="confirm-password"
        placeholder="Confirm your Password"
        SecondaryIcon={PasswordInvisibleIcon}
        onSecondaryIconClick={() =>
          setIsConfirmVisible((isConfirmVisible) => !isConfirmVisible)
        }
      />
    </form>
  );
};
