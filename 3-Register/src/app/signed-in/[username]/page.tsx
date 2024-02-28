import { CelebrationIcon } from "@/ui/Icons";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["500"] });
interface SignedInProps {
  params: {
    username: string;
  };
}

const simulateDelay = async (miliseconds: number) => {
  return await new Promise((resolve) => setTimeout(resolve, miliseconds));
};

export default async function SignedIn({
  params: { username },
}: SignedInProps) {
  await simulateDelay(3000);

  return (
    <main className="flex flex-col flex-1 items-center justify-center p-16 gap-4">
      <CelebrationIcon />
      <div>
        <h2
          className={`text-3xl text-center text-bold text-red-700 ${ubuntu.className}`}
        >
          Great!
        </h2>
        <h2
          className={`text-3xl text-center text-bold text-red-700 max-w-64 ${ubuntu.className}`}
        >
          You signed in as {username}
        </h2>
      </div>
    </main>
  );
}
