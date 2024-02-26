import { RegisterForm } from "@/components/RegisterForm";
import { Ubuntu } from "next/font/google";
import Link from "next/link";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });

export default function Register() {
  return (
    <main className="flex flex-col p-16  gap-8 w-full">
      <h1 className={`text-2xl font-medium ${ubuntu.className}`}>Sign Up</h1>
      <div className="flex flex-col gap-2 font-light">
        <p>If you already have an account registered</p>
        <p>
          You can{" "}
          <Link
            className="text-custom-orange font-medium underline underline-offset-2 decoration-0"
            href="#"
          >
            Log In here!
          </Link>
        </p>
      </div>

      <RegisterForm />
    </main>
  );
}
