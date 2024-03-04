import { CelebrationIcon } from "@/ui/Icons";
import { ubuntu } from "@/app/fonts";

interface SignedInProps {
  params: {
    username: string;
  };
}

const simulateDelay = async (miliseconds: number) => {
  return await new Promise((resolve) => setTimeout(resolve, miliseconds));
};

const SignedIn = async ({ params: { username } }: SignedInProps) => {
  await simulateDelay(3000);

  return (
    <div className="flex flex-col flex-1 items-center justify-center p-16 gap-4 font-medium">
      <CelebrationIcon />
      <div
        className={`text-3xl text-center text-bold text-red-700 ${ubuntu.className}`}
      >
        <h2>Great!</h2>
        <h2 className="max-w-64">You signed in as {username}</h2>
      </div>
    </div>
  );
};

export default SignedIn;
