import { z } from "zod";

const availableDomains = ["@gmail.com", "@hotmail.com", "@lightit.io"];
const emailDomainIsValid = (email: string) =>
  availableDomains.some((domain) => email.endsWith(domain));

export const registerSchema = z
  .object({
    email: z.string().email().refine(emailDomainIsValid, {
      message: "Email must end with @lightit.io, @hotmail.com or @gmail.com.",
    }),
    username: z
      .string()
      .min(3, { message: "Usernames have to be at leat 3 characters long." })
      .regex(/^[a-z]+$/, {
        message: "Usernames can only contain lowercase characters.",
      }),
    password: z
      .string()
      .min(8, { message: "Password must have 8 characters or more." })
      .regex(/[A-Z]/, {
        message: "Password must have an uppercase character.",
      })
      .regex(/[a-z]/, {
        message: "Password must have a lowercase character.",
      })
      .regex(/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/, {
        message: "Password must have a special character.",
      }),
    confirm: z.string(),
  })
  .refine((data) => data.password == data.confirm, {
    message: "Password and Confirm must match",
    path: ["confirm"],
  });

export type RegisterFormType = z.infer<typeof registerSchema>;
