import { Validation } from "@/hooks/useFormInput";

const validateEmailDomain = (email: string) => {
  const availableDomains = ["@gmail.com", "@hotmail.com", "@lightit.io"];
  const mailHasAcceptedDomain = availableDomains.some((domain) =>
    email.endsWith(domain)
  );

  return mailHasAcceptedDomain;
};

const emailValidation: Validation = {
  validator: validateEmailDomain,
  error: "Email must end wuth @lightit.io, @hotmail.com or @gmail.com.",
};

export const EmailValidation = [emailValidation];

const validateUsernameLength = (username: string) => username.length >= 3;

const validateUsernameChars = (username: string) => {
  const allowedChars = /^[a-z]+$/;
  return allowedChars.test(username);
};

export const UsernameValidation: Validation[] = [
  {
    validator: validateUsernameLength,
    error: "Username must be at least 3 characters long",
  },
  {
    validator: validateUsernameChars,
    error: "Usernames can only contain lowercase characters",
  },
];

const validatePasswordLength = (password: string) => password.length >= 8;

const validatePasswordHasUppercase = (password: string) =>
  /[A-Z]/.test(password);

const validatePasswordHasLowercase = (password: string) =>
  /[a-z]/.test(password);

const validatePasswordHasSpecialChar = (password: string) =>
  /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password);

export const PasswordValidation: Validation[] = [
  {
    validator: validatePasswordLength,
    error: "Password must have 8 characters or more.",
  },
  {
    validator: validatePasswordHasUppercase,
    error: "Password must have an uppercase character.",
  },
  {
    validator: validatePasswordHasLowercase,
    error: "Password must have a lowercase character.",
  },
  {
    validator: validatePasswordHasSpecialChar,
    error: "Password must have a special character.",
  },
];
