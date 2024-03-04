import { RegisterForm } from "@/components/RegisterForm";
import Link from "next/link";
import { ubuntu } from "../fonts";

const Register = () => {
  return (
    <>
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
    </>
  );
};

export default Register;
